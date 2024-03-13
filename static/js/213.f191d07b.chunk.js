(this["webpackJsonppraveenoruganti-courses"]=this["webpackJsonppraveenoruganti-courses"]||[]).push([[213],{782:function(n,e,t){"use strict";t.r(e),e.default=' Batch processing is a group or whole process. Which is a process of group or batch transactions that does not interact with users when running batch processing.\n\nThe difference between batch processing and transaction processing is that transaction processing processes one transaction at a time and interacts with users, while batch processing can process Anytime Which is especially suitable for processing at the end of the cycle (end-of-cycle processing) such as for creating bank reports at the end of the day. Or pay monthly or bi-monthly payrolls, and Spring framework also has Spring Batch support for Batch processing.\n\nSpring framework also has a project that supports batch processing. This is Spring Batch specifically designed for this type of processing. Allowing us to reuse the functions needed to work with big data, including tracing / logging, transaction management, job processing statistic, job restart, and resouce management, with advanced techniques to handle very large data through optimization and partitioning techniques, and also support scalable.\n\nIn Spring Batch to work with sources of information (data source) from a variety of text file or database where job ( the Job ) of batch processing consists of several steps ( Step ) Each Step has 3 parts ItemReader , ItemProcess and ItemWriter by. JobLauncher will start the Job by keeping the metadata during operation at JobRepository.\n\n![screenshot of the app](https://praveenoruganti.github.io/courses/images/spring/batch.PNG)\n\nItemReader - is the reading part for step by reading 1 item at a time.\n\nItemProcess - is the business process of an item after reading data.\n\nItemWriter - is the output of Step. It writes batch data one time.\n\nIn the Maven project, we can add Spring Batch as well.\n\n```jsx\n<dependency>\n  <groupId> org.springframework.boot </groupId>\n  <artifactId> spring-boot-starter-batch </artifactId>\n</dependency>\n```\n\n**Spring Batch Project**\n\nLet\'s create a simple Spring Batch project for batch process with 2 steps which are\n\n1. Read data from a CSV file, then convert the data and write to the database\n2. Read data from database and write data to XML file\n\nThe CSV file to be read contains the following information Which is simple information.\n\nFor example,\n\n```jsx\nusername, userid, transaction_date, transaction_amount;\nPraveen, 149903, 31 / 10 / 2019, 10000;\nPrasad, 2134, 3 / 12 / 2019, 12321;\nVarma, 2134, 2 / 02 / 2019, 23411;\n```\n\nCreate a project using Spring Initializr. Select Spring Batch, MySQL driver, JDBC API, and Lombok.\n\nCreate a data model to represent transaction data using Lombdok as a Builder class @Builder and Getter / Setter as well @Data.\n\n```jsx\n@Data\n@Builder\n@NoArgsConstructor\n@AllArgsConstructor\npublic  class  Transaction {\n    private  String userName;\n    private  int userId;\n    private  Date transactionDate;\n    private  double transactionAmount;\n\n}\n\n```\n\n**Step 1**\n\nIt is a procedure for reading data from a CSV file with ItemReader and converting data to be read with ItemProcess. After that, insert data into the database with ItemWriter.\n\n```jsx\n@Configuration\npublic  class  BatchStep1Config {\n    @Value ( " $ {input} " )\n    private  Resource inputFile;\n\n    @Autowired\n    private  DataSource dataSource;\n\n    @Autowired\n    private  StepBuilderFactory stepBuilderFactory;\n\n    @Bean ( " step1ItemReader " )\n    public  ItemReader < Transaction >  fileReader () {\n        return  new  FlatFileItemReaderBuilder < Transaction > ()\n                .resource (inputFile)\n                .name ( " file-reader " )\n                .targetType ( Transaction . class)\n                .delimited () . delimiter ( " , " )\n                .names ( new  String [] { " firstName " , " userId " , " transactionDate " , " transactionAmount " })\n                .linesToSkip ( 1 )\n                .build ();\n    }\n\n    @Bean ( " step1ItemWriter " )\n    public  ItemWriter < Transaction >  dbWriter () {\n        return  new  JdbcBatchItemWriterBuilder < Transaction > ()\n                .dataSource (dataSource)\n                .sql ( " INSERT INTO TRANSACTION VALUES (: userId,: userName,: transactionDate,: transactionAmount) " )\n                .beanMapped ()\n                .build ();\n    }\n\n    @Bean ( " step1ItemProcessor " )\n    public  ItemProcessor < Transaction , Transaction >  processor () {\n        return  new  ItemProcessor < Transaction , Transaction > () {\n            private  static  final  double  USD_THB_RATE  =  32.5 ;\n\n            @Override\n            public  Transaction  process ( Transaction  item ) {\n                double bahtAmount = item . getTransactionAmount () *  USD_THB_RATE ;\n                String userNameUpperCase = item . getUserName () . toUpperCase ();\n\n                return  Transaction . builder ()\n                        .userId (item . getUserId ())\n                        .userName (userNameUpperCase)\n                        .transactionDate (item . getTransactionDate ())\n                        .transactionAmount (bahtAmount)\n                        .build ();\n            }\n        };\n    }\n\n    @Bean\n    public  Step  step1 ( ItemReader < Transaction >  step1ItemReader ,\n                      ItemProcessor < Transaction , Transaction >  step1ItemProcessor ,\n                      ItemWriter < Transaction >  step1ItemWriter ) {\n        return stepBuilderFactory . get ( " Step1 - Import Transaction Data " )\n                . < Transaction , Transaction > chunk ( 1000 )\n                .reader (step1ItemReader)\n                .processor (step1ItemProcessor)\n                .writer (step1ItemWriter)\n                .build ();\n    }\n\n}\n\n\n```\n\nAnd in the batch BatchJobConfig class, create a Job by injecting Step1 and insert it in the flow method for Job to call Step1 and use it @EnableBatchProcessingfor Batch processing to work in this Application.\n\n```jsx\n@Configuration\n@EnableBatchProcessing\npublic  class  BatchJobConfig {\n    @Autowired\n    private  JobBuilderFactory jobBuilderFactory;\n\n    @Bean\n    public  Job  transactionJob ( Step  step1 ) {\n        return jobBuilderFactory . get ( " transactionJob " )\n                .incrementer ( new  RunIdIncrementer ())\n                .flow (step1)\n                .end ()\n                .build ();\n    }\n\n}\n```\n\nWhen running this application and checking into the database, you will see that the data has been successfully inserted into the database. Which is already changed information\n\n**Step 2**\n\nCreate a TransactionSummary class to get the query values \u200b\u200bfrom the database and use to write XML files.\n\n```jsx\n@Data\n@Builder\n@NoArgsConstructor\n@AllArgsConstructor\n@XmlRootElement ( name  =  " transactionSummary " )\npublic  class  TransactionSummary {\n    private  int count;\n    private  int totalAmount;\n\n```\n\nIs a procedure for querying data from database with ItemReader which is summary And write the data to XML file\n\n```jsx\n@Configuration\npublic  class  BatchStep2Config {\n    @Value ( " $ {output} " )\n    private  Resource outputFile;\n\n    @Autowired\n    private  DataSource dataSource;\n\n    @Autowired\n    private  StepBuilderFactory stepBuilderFactory;\n\n    @Bean ( " step2ItemReader " )\n    public  ItemReader < TransactionSummary >  dbReader () {\n        return  new  JdbcCursorItemReaderBuilder < TransactionSummary > ()\n                .dataSource (dataSource)\n                .name ( " db-reader " )\n                .sql ( " select count (first_name) a, sum (transaction_amount) b from TRANSACTION " )\n                .rowMapper ((rs, rowNum) - >  TransactionSummary . builder ()\n                        .count (rs . getInt ( " a " ))\n                        .totalAmount (rs . getInt ( " b " ))\n                        .build ()\n                )\n                .build ();\n    }\n\n    @Bean ( " step2ItemWriter " )\n    public  ItemWriter < TransactionSummary >  xmlWriter ( Marshaller  marshaller ) {\n        StaxEventItemWriter < TransactionSummary > itemWriter =  new  StaxEventItemWriter <> ();\n        itemWriter . setMarshaller (marshaller);\n        itemWriter . setRootTagName ( " summary " );\n        itemWriter . setResource (outputFile);\n        return itemWriter;\n    }\n\n    @Bean\n    public  Marshaller  marshaller () {\n        Jaxb2Marshaller marshaller =  new  Jaxb2Marshaller ();\n        marshaller . setClassesToBeBound ( TransactionSummary . class);\n        return marshaller;\n    }\n\n    @Bean\n    public  Step  step2 ( ItemReader < TransactionSummary >  step2ItemReader ,\n                      ItemWriter < TransactionSummary >  step2ItemWriter ) {\n        return stepBuilderFactory . get ( " Step1 - Import Transaction Data " )\n                . < TransactionSummary , TransactionSummary > chunk ( 1000 )\n                .reader (step2ItemReader)\n                .writer (step2ItemWriter)\n                .build ();\n    }\n\n}\n```\n\nAdd Step2 to the Batch Job configuration and add to the nextmethod while changing Step1 using the startmethod.\n\n```jsx\n@Configuration\n@EnableBatchProcessing\npublic  class  BatchJobConfig {\n    @Autowired\n    private  JobBuilderFactory jobBuilderFactory;\n\n    @Bean\n    public  Job  transactionJob ( Step  step1 , Step  step2 ) {\n        return jobBuilderFactory . get ( " transactionJob " )\n                .incrementer ( new  RunIdIncrementer ())\n                .start (step1)\n                .next (step2)\n                .build ();\n    }\n\n}\n\n```\n\nWhen the Run Application that adds Step2 to the Job, you will get an XML file that contains the summary of the transaction.\n\n```jsx\n<? xml version = "1.0" encoding = "UTF-8" ?>\n <summary>\n    <transactionSummary>\n        <count> 3 </count>\n        <totalAmount> 1486291 </totalAmount>\n    </transactionSummary>\n</summary>\n\n\n```\n '}}]);