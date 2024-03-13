(this["webpackJsonppraveenoruganti-courses"]=this["webpackJsonppraveenoruganti-courses"]||[]).push([[279],{848:function(e,t,n){"use strict";n.r(t),t.default=' Let\'s understand difference between Unit Testing and Integration Testing.\n\n**Unit Testing**\n\nUnit testing involves the testing for each unit or an individual component of the software application.\n\nThe purpose is to validate that each unit of the software code performs as expected.\n\nUnit testing is done during development(coding phase) of an application by the developers.\n\nUnit may be an individual function, method, procedure, module and object.\n\n![screenshot of the app](https://praveenoruganti.github.io/courses/images/testing/unittesting.jpg)\n\n\nIn Java, Junit framework is used for unit testing Java applications.\n\nMost of the times one component will depend on other component(s), so while implementing unit tests we should mock the dependencies with the desired behaviour using frameworks like Mockito.\n\n\n**Integration Testing**\n\nIntegration tests focus on integrating different layers of the application. That also means no mocking is involved.\n\nBasically, we write integration tests for testing a feature which may involve interaction with multiple components.\n\n![screenshot of the app](https://praveenoruganti.github.io/courses/images/testing/integrationtesting.jpg)\n\n\n`Here with the great visualization of how the test pyramid for Spring Boot projects can look like`\n\n![screenshot of the app](https://praveenoruganti.github.io/courses/images/testing/testpyramid.jpg)\n\nIt boils down to (from top to bottom):\n\n- We have a small number of tests that work with @SpringBootTest and the entire Spring context (integration or end-to-end tests).\n- We have some unit-like tests with Spring Test support to test slices of our application.\n- We have a lot of unit tests that solely use JUnit and Mockito.\n\n\n**Spring Boot Starter Test Dependency**\n\nThe Spring Boot Starter Test dependency is a primary dependency for testing the Spring Boot Applications. It holds all the necessary elements required for the testing.\n\nThis starter includes:\n\n- Spring-specific dependencies\n- Dependencies for auto-configuration\n- Set of test libraries- Junit, Mockito, Hamcrest, AssertJ, JSONassert, and JsonPath.\n\nWhen using this starter, we don\'t need to update the versions of all the dependencies (Junit, Mockito, Hamcrest, AssertJ, JSONassert, and JsonPath) manually. The Spring Boot Parent POM handles all dependency versions , and the Spring Boot team ensures the different testing dependencies work properly together.\n\n\nLet\'s create an employee management application using Spring Boot and then write test classes accordingly.\n\n**Main**\n\n```jsx\npackage com.praveen.employee;\n\nimport org.springframework.boot.SpringApplication;\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.core.env.Environment;\n\nimport io.swagger.v3.oas.models.Components;\nimport io.swagger.v3.oas.models.OpenAPI;\nimport io.swagger.v3.oas.models.info.Contact;\nimport io.swagger.v3.oas.models.info.Info;\nimport io.swagger.v3.oas.models.info.License;\n\n@SpringBootApplication\npublic class EmployeeRegistrationApplication {\n\n\tpublic static void main(String[] args) {\n\t\tSpringApplication.run(EmployeeRegistrationApplication.class);\n\t}\n\n\t@Bean\n\tpublic OpenAPI customOpenAPI(Environment env) {\n\n\t\treturn new OpenAPI().components(new Components()).info(new Info()\n\t\t\t\t.title(env.getRequiredProperty("app.openApiTitle"))\n\t\t\t\t.description(env.getRequiredProperty("app.openApiDescription"))\n\t\t\t\t.contact(new Contact().name("Praveen Oruganti").email("praveenoruganti@gmail.com")\n\t\t\t\t\t\t.url("https://praveenoruganti.github.io"))\n\t\t\t\t.termsOfService("https://praveenoruganti.github.io/#/aboutme")\n\t\t\t\t.license(new License().name("GNU General Public License v3.0").url("https://www.gnu.org/licenses")));\n\t}\n\n}\n\n\n\n```\n\n**Controller**\n\n```jsx\npackage com.praveen.employee.controller;\n\nimport java.util.List;\n\nimport javax.validation.Valid;\nimport javax.validation.constraints.Min;\n\nimport org.springframework.http.MediaType;\nimport org.springframework.validation.annotation.Validated;\nimport org.springframework.web.bind.annotation.DeleteMapping;\nimport org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.PathVariable;\nimport org.springframework.web.bind.annotation.PostMapping;\nimport org.springframework.web.bind.annotation.PutMapping;\nimport org.springframework.web.bind.annotation.RequestBody;\nimport org.springframework.web.bind.annotation.RequestMapping;\nimport org.springframework.web.bind.annotation.RestController;\n\nimport com.praveen.employee.aop.LoggingAspect;\nimport com.praveen.employee.aop.TrackExecutionTime;\nimport com.praveen.employee.entity.Employee;\nimport com.praveen.employee.exception.EmployeeNotFoundException;\nimport com.praveen.employee.model.EmployeeRequest;\nimport com.praveen.employee.model.EmployeeResponse;\nimport com.praveen.employee.service.EmployeeRegistrationService;\n\nimport io.swagger.v3.oas.annotations.Operation;\nimport io.swagger.v3.oas.annotations.tags.Tag;\n\n@RestController\n@Validated\n@RequestMapping("/api/v1_0")\n@Tag(description = "Employee Registration Operations", name = "Employee Registration Operations")\npublic class EmployeeRegistrationController {\n\n\tprivate final EmployeeRegistrationService employeeRegistrationService;\n\n\tpublic EmployeeRegistrationController(EmployeeRegistrationService employeeRegistrationService) {\n\t\tthis.employeeRegistrationService = employeeRegistrationService;\n\t}\n\n\t@GetMapping(value = "/employees", produces = MediaType.APPLICATION_JSON_VALUE)\n\t@LoggingAspect\n\t@TrackExecutionTime\n\t@Operation(description = "Fetch All Employees", summary = "Fetch All Employees")\n\tpublic List<Employee> fetchAllEmployees() {\n\t\treturn employeeRegistrationService.fetchAllEmployees();\n\n\t}\n\n\t@GetMapping(value = "/employees/{id}", produces = MediaType.APPLICATION_JSON_VALUE)\n\t@LoggingAspect\n\t@TrackExecutionTime\n\t@Operation(description = "Fetch Employee By Employee Id", summary = "Fetch Employee By Employee Id")\n\tpublic EmployeeResponse getEmployeeById(@PathVariable("id") @Min(1) Long id) throws EmployeeNotFoundException {\n\t\treturn employeeRegistrationService.getEmployeeById(id);\n\n\t}\n\n\t@PostMapping(value = "/employees", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)\n\t@LoggingAspect\n\t@TrackExecutionTime\n\t@Operation(description = "Create Employee", summary = "Create Employee")\n\tpublic EmployeeResponse createEmployee(@RequestBody @Valid EmployeeRequest emp) {\n\t\treturn employeeRegistrationService.createEmployee(emp);\n\t}\n\n\t@PutMapping(value = "/employees/{id}", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)\n\t@LoggingAspect\n\t@TrackExecutionTime\n\t@Operation(description = "Create Employee", summary = "Create Employee")\n\tpublic EmployeeResponse updateEmployeeById(@RequestBody @Valid EmployeeRequest emp,\n\t\t\t@PathVariable("id") @Min(1) Long id) throws EmployeeNotFoundException {\n\t\treturn employeeRegistrationService.updateEmployeeById(emp, id);\n\t}\n\n\t@DeleteMapping(value = "/employees/{id}", produces = MediaType.APPLICATION_JSON_VALUE)\n\t@LoggingAspect\n\t@TrackExecutionTime\n\t@Operation(description = "Delete Employee By Employee Id", summary = "Delete Employee By Employee Id")\n\tpublic EmployeeResponse deleteEmployeeById(@PathVariable("id") @Min(1) Long id) throws EmployeeNotFoundException {\n\t\treturn employeeRegistrationService.deleteEmployeeById(id);\n\t}\n\n}\n\n\n```\n\n**Service**\n\n```jsx\npackage com.praveen.employee.service;\n\nimport java.util.List;\n\nimport org.springframework.stereotype.Service;\n\nimport com.praveen.employee.common.Constants;\nimport com.praveen.employee.entity.Employee;\nimport com.praveen.employee.exception.EmployeeNotFoundException;\nimport com.praveen.employee.model.EmployeeRequest;\nimport com.praveen.employee.model.EmployeeResponse;\nimport com.praveen.employee.model.EmployeeResponseData;\nimport com.praveen.employee.repository.EmployeeRepository;\n\n@Service\npublic class EmployeeRegistrationService {\n\n\tprivate final EmployeeRepository employeeRepository;\n\n\tpublic EmployeeRegistrationService(EmployeeRepository employeeRepository) {\n\t\tthis.employeeRepository = employeeRepository;\n\t}\n\n\tpublic List<Employee> fetchAllEmployees() {\n\t\treturn employeeRepository.findAll();\n\n\t}\n\n\tpublic EmployeeResponse getEmployeeById(Long empId) throws EmployeeNotFoundException {\n\t\tEmployee emp = employeeRepository.findById(empId).orElseThrow(EmployeeNotFoundException::new);\n\t\treturn EmployeeResponse.builder().status(Constants.SUCCESS)\n\t\t\t\t.data(EmployeeResponseData.builder().executed(true).id(emp.getId()).name(emp.getName())\n\t\t\t\t\t\t.designation(emp.getDesignation()).location(emp.getLocation()).salary(emp.getSalary()).build())\n\t\t\t\t.build();\n\t}\n\n\tpublic EmployeeResponse createEmployee(EmployeeRequest employeeRequest) {\n\t\tEmployee emp = Employee.builder().name(employeeRequest.getName()).designation(employeeRequest.getDesignation())\n\t\t\t\t.location(employeeRequest.getLocation()).salary(employeeRequest.getSalary()).build();\n\t\temployeeRepository.save(emp);\n\t\treturn EmployeeResponse.builder().status(Constants.SUCCESS).appId(employeeRequest.getAppId())\n\t\t\t\t.transactionId(employeeRequest.getTransactionId())\n\t\t\t\t.data(EmployeeResponseData.builder().executed(true).id(emp.getId()).name(emp.getName())\n\t\t\t\t\t\t.designation(emp.getDesignation()).location(emp.getLocation()).salary(emp.getSalary()).build())\n\t\t\t\t.build();\n\t}\n\n\tpublic EmployeeResponse updateEmployeeById(EmployeeRequest employeeRequest, Long empId)\n\t\t\tthrows EmployeeNotFoundException {\n\t\tEmployee emp = employeeRepository.findById(empId).orElseThrow(EmployeeNotFoundException::new);\n\t\temp.setDesignation(employeeRequest.getDesignation());\n\t\temp.setLocation(employeeRequest.getLocation());\n\t\temp.setName(employeeRequest.getName());\n\t\temp.setSalary(employeeRequest.getSalary());\n\t\temployeeRepository.save(emp);\n\t\treturn EmployeeResponse.builder().status(Constants.SUCCESS)\n\t\t\t\t.data(EmployeeResponseData.builder().executed(true).id(emp.getId()).name(emp.getName())\n\t\t\t\t\t\t.designation(emp.getDesignation()).location(emp.getLocation()).salary(emp.getSalary()).build())\n\t\t\t\t.build();\n\t}\n\n\tpublic EmployeeResponse deleteEmployeeById(Long empId) throws EmployeeNotFoundException {\n\t\temployeeRepository.deleteById(empId);\n\t\treturn EmployeeResponse.builder().status(Constants.SUCCESS)\n\t\t\t\t.data(EmployeeResponseData.builder().executed(true).id(empId).build()).build();\n\n\t}\n\n}\n\n\n\n```\n\n\n**Repository**\n\n```jsx\npackage com.praveen.employee.repository;\n\nimport org.springframework.data.jpa.repository.JpaRepository;\nimport org.springframework.stereotype.Repository;\n\nimport com.praveen.employee.entity.Employee;\n\n@Repository\npublic interface EmployeeRepository extends JpaRepository<Employee, Long> {\n\n}\n\n\n```\n\nLet\'s add the below dependency in pom.xml for Spring Boot Application Testing.\n\n```jsx\n<dependency>\n\t<groupId>org.springframework.boot</groupId>\n\t<artifactId>spring-boot-starter-test</artifactId>\n\t<scope>test</scope>\n</dependency>\n```\n\nThe first thing you can do is write a simple sanity check test that will fail if the application context cannot start.\n\n**Main Test**\n\n```jsx\npackage com.praveen.employee;\n\nimport org.junit.jupiter.api.Test;\nimport org.springframework.boot.test.context.SpringBootTest;\n\n@SpringBootTest\nclass EmployeeRegistrationApplicationTests {\n\n\t@Test\n\tvoid contextLoads() {\n\t\tSystem.out.println("Successfully Loaded");\n\t}\n\n}\n\n\n\n```\n\nLet\'s write test class for our repository, service and controller classes.\n\n\n**Repository Test**\n\nSpring Boot provides the @DataJpaTest annotation to test the persistence layer components that will autoconfigure in-memory embedded database for testing purpose.\n\nThe @DataJpaTest annotation doesn\'t load other Spring beans(@Component, @RestController, @Service, and annotated beans) into ApplicationContext.\n\nBy default, it scans for @Entity classes and configures Spring Data JPA repositories annotated with @Repository annotation.\n\nBy default, tests annotated with @DataJpaTest are transactional and rollback at the end of each test.\n\n```jsx\npackage com.praveen.employee.repository;\n\nimport static org.assertj.core.api.Assertions.assertThat;\n\nimport java.util.List;\nimport java.util.Optional;\n\nimport org.junit.jupiter.api.DisplayName;\nimport org.junit.jupiter.api.Test;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;\n\nimport com.praveen.employee.entity.Employee;\n\n@DataJpaTest\nclass EmployeeRepositoryTests {\n\n\t@Autowired\n\tprivate EmployeeRepository empRepository;\n\n\t@DisplayName("Junit Test for save Employee operation")\n\t@Test\n\tvoid givenEmployeeObject_whenSave_thenReturnSavedEmployee() {\n\n\t\t// given - precondition or setup\n\t\tEmployee emp = Employee.builder().name("Praveen Oruganti").salary(3600000L).designation("Full Stack Developer")\n\t\t\t\t.location("Hyderabad").build();\n\n\t\t// when - action or behaviour that we are going to test\n\t\tEmployee saveEmployee = empRepository.save(emp);\n\n\t\t// then - verify the output\n\t\tassertThat(saveEmployee).isNotNull();\n\t\tassertThat(saveEmployee.getId()).isNotZero();\n\n\t}\n\n\t@DisplayName("Junit Test for get all Employees operation")\n\t@Test\n\tvoid givenEmployeeList_whenFindAll_thenEmployeeList() {\n\n\t\t// given - precondition or setup\n\t\tEmployee emp = Employee.builder().name("Praveen Oruganti").salary(3600000L).designation("Full Stack Developer")\n\t\t\t\t.location("Hyderabad").build();\n\n\t\tEmployee emp1 = Employee.builder().name("Prasad Oruganti").salary(5000000L).designation("Delivery Manager")\n\t\t\t\t.location("Bangalore").build();\n\n\t\tempRepository.save(emp);\n\t\tempRepository.save(emp1);\n\n\t\t// when - action or behaviour that we are going to test\n\t\tList<Employee> empList = empRepository.findAll();\n\n\t\t// then - verify the output\n\t\tassertThat(empList).isNotNull().hasSize(2);\n\t}\n\n\t@DisplayName("Junit Test for get employee by id operation")\n\t@Test\n\tvoid givenEmployeeObject_whenFindById_thenReturnEmployeeObject() {\n\n\t\t// given - precondition or setup\n\t\tEmployee emp = Employee.builder().name("Praveen Oruganti").salary(3600000L).designation("Full Stack Developer")\n\t\t\t\t.location("Hyderabad").build();\n\n\t\tempRepository.save(emp);\n\n\t\t// when - action or behaviour that we are going to test\n\t\tEmployee empDB = empRepository.findById(emp.getId()).get();\n\n\t\t// then - verify the output\n\t\tassertThat(empDB).isNotNull();\n\n\t}\n\n\t@DisplayName("Junit Test for update employee by id operation")\n\t@Test\n\tvoid givenEmployeeObject_whenUpdateEmployee_thenReturnUpdatedEmployee() {\n\n\t\t// given - precondition or setup\n\t\tEmployee emp = Employee.builder().name("Praveen Oruganti").salary(3600000L).designation("Full Stack Developer")\n\t\t\t\t.location("Hyderabad").build();\n\n\t\tempRepository.save(emp);\n\n\t\t// when - action or behaviour that we are going to test\n\t\tEmployee savedEmployee = empRepository.findById(emp.getId()).get();\n\t\tsavedEmployee.setDesignation("Solution Architect");\n\t\tEmployee updatedEmployee = empRepository.save(savedEmployee);\n\n\t\t// then - verify the output\n\t\tassertThat(updatedEmployee.getDesignation()).isEqualTo("Solution Architect");\n\n\t}\n\n\t@DisplayName("Junit Test for delete employee operation")\n\t@Test\n\tvoid givenEmployeeObject_whenDelete_thenRemoveEmployee() {\n\n\t\t// given - precondition or setup\n\t\tEmployee emp = Employee.builder().name("Praveen Oruganti").salary(3600000L).designation("Full Stack Developer")\n\t\t\t\t.location("Hyderabad").build();\n\n\t\tempRepository.save(emp);\n\n\t\t// when - action or behaviour that we are going to test\n\t\tempRepository.deleteById(emp.getId());\n\t\tOptional<Employee> empOptional = empRepository.findById(emp.getId());\n\n\t\t// then - verify the output\n\t\tassertThat(empOptional).isEmpty();\n\n\t}\n\n}\n\n```\n\n**Controller Test**\n\n```jsx\npackage com.praveen.employee.controller;\n\nimport static org.mockito.Mockito.when;\nimport static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;\nimport static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;\nimport static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;\nimport static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;\nimport static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;\n\nimport java.util.ArrayList;\nimport java.util.HashMap;\nimport java.util.List;\nimport java.util.Map;\n\nimport org.junit.jupiter.api.Test;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;\nimport org.springframework.boot.test.context.SpringBootTest;\nimport org.springframework.boot.test.mock.mockito.MockBean;\nimport org.springframework.http.MediaType;\nimport org.springframework.test.web.servlet.MockMvc;\n\nimport com.google.gson.Gson;\nimport com.praveen.employee.common.Constants;\nimport com.praveen.employee.entity.Employee;\nimport com.praveen.employee.model.EmployeeRequest;\nimport com.praveen.employee.model.EmployeeResponse;\nimport com.praveen.employee.model.EmployeeResponseData;\nimport com.praveen.employee.model.ErrorMessage;\nimport com.praveen.employee.service.EmployeeRegistrationService;\n\n@SpringBootTest\n@AutoConfigureMockMvc\nclass EmployeeRegistrationControllerTests {\n\n\t@Autowired\n\tprivate MockMvc mockMvc;\n\n\t@MockBean\n\tEmployeeRegistrationService employeeRegistrationService;\n\n\t@Autowired\n\tprivate Gson gson;\n\n\t@Test\n\tvoid testGetEmployeeById() throws Exception {\n\t\tEmployeeResponse empResponse = EmployeeResponse\n\t\t\t\t.builder().status(Constants.SUCCESS).appId("Test").transactionId("Test").data(EmployeeResponseData\n\t\t\t\t\t\t.builder().executed(true).name("Test").designation("Test").location("Test").salary(1L).build())\n\t\t\t\t.build();\n\t\twhen(employeeRegistrationService.getEmployeeById(1L)).thenReturn(empResponse);\n\n\t\tmockMvc.perform(get("/api/v1_0/employees/{id}", 1)).andExpect(status().isOk())\n\t\t\t\t.andExpect(content().json(gson.toJson(empResponse)));\n\n\t}\n\n\t@Test\n\tvoid testDeleteEmployeeById() throws Exception {\n\t\tEmployeeResponse empResponse = EmployeeResponse.builder().status(Constants.SUCCESS).appId("Test")\n\t\t\t\t.transactionId("Test").data(EmployeeResponseData.builder().executed(true).id(1L).build()).build();\n\t\twhen(employeeRegistrationService.deleteEmployeeById(1L)).thenReturn(empResponse);\n\t\tmockMvc.perform(delete("/api/v1_0/employees/{id}", 1)).andExpect(status().isOk())\n\t\t\t\t.andExpect(content().json(gson.toJson(empResponse)));\n\t}\n\n\t@Test\n\tvoid testFetchAllEmployees() throws Exception {\n\t\tList<Employee> employees = new ArrayList<>();\n\t\temployees.add(Employee.builder().designation("Test").id(1L).location("Test").name("Test").salary(1L).build());\n\t\temployees\n\t\t\t\t.add(Employee.builder().designation("Test1").id(1L).location("Test1").name("Test1").salary(2L).build());\n\t\temployees\n\t\t\t\t.add(Employee.builder().designation("Test2").id(1L).location("Test2").name("Test2").salary(3L).build());\n\n\t\twhen(employeeRegistrationService.fetchAllEmployees()).thenReturn(employees);\n\n\t\tmockMvc.perform(get("/api/v1_0/employees")).andExpect(status().isOk())\n\t\t\t\t.andExpect(content().json(gson.toJson(employees)));\n\n\t}\n\n\t@Test\n\tvoid testCreateEmployeeConstraintValidation() throws Exception {\n\t\tEmployeeRequest empRequest = EmployeeRequest.builder().designation("Test").appId("Test1").location("Test")\n\t\t\t\t.name("Test").salary(1L).transactionId("Test").build();\n\n\t\tMap<String, String> errors = new HashMap<>();\n\t\terrors.put("400006", "Invalid App ID");\n\n\t\tEmployeeResponse empResponse = EmployeeResponse.builder().status(Constants.FAIL).appId("Test1")\n\t\t\t\t.transactionId("Test").data(null).errors(ErrorMessage.builder().code("4000")\n\t\t\t\t\t\t.description("Input Validation Failure").errors(errors).build())\n\t\t\t\t.build();\n\n\t\tmockMvc.perform(post("/api/v1_0/employees").contentType(MediaType.APPLICATION_JSON_VALUE)\n\t\t\t\t.content(gson.toJson(empRequest))).andExpect(status().is4xxClientError())\n\t\t\t\t.andExpect(content().json(gson.toJson(empResponse)));\n\n\t}\n\n\t@Test\n\tvoid testCreateEmployee() throws Exception {\n\t\tEmployeeRequest empRequest = EmployeeRequest.builder().designation("Test").appId("Test").location("Test")\n\t\t\t\t.name("Test").salary(1L).transactionId("Test").build();\n\t\tEmployeeResponse empResponse = EmployeeResponse\n\t\t\t\t.builder().status(Constants.SUCCESS).appId("Test").transactionId("Test").data(EmployeeResponseData\n\t\t\t\t\t\t.builder().executed(true).name("Test").designation("Test").location("Test").salary(1L).build())\n\t\t\t\t.build();\n\t\twhen(employeeRegistrationService.createEmployee(empRequest)).thenReturn(empResponse);\n\n\t\tmockMvc.perform(post("/api/v1_0/employees").contentType(MediaType.APPLICATION_JSON_VALUE)\n\t\t\t\t.content(gson.toJson(empRequest))).andExpect(status().isOk())\n\t\t\t\t.andExpect(content().json(gson.toJson(empResponse)));\n\t}\n\n}\n\n\n\n```\n\n**Service Test**\n\n```jsx\npackage com.praveen.employee.service;\n\nimport static org.junit.jupiter.api.Assertions.assertEquals;\nimport static org.mockito.Mockito.times;\nimport static org.mockito.Mockito.verify;\nimport static org.mockito.Mockito.when;\n\nimport java.util.ArrayList;\nimport java.util.List;\nimport java.util.Optional;\n\nimport org.junit.jupiter.api.Test;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.boot.test.context.SpringBootTest;\nimport org.springframework.boot.test.mock.mockito.MockBean;\n\nimport com.praveen.employee.common.Constants;\nimport com.praveen.employee.entity.Employee;\nimport com.praveen.employee.exception.EmployeeNotFoundException;\nimport com.praveen.employee.model.EmployeeRequest;\nimport com.praveen.employee.model.EmployeeResponse;\nimport com.praveen.employee.model.EmployeeResponseData;\nimport com.praveen.employee.repository.EmployeeRepository;\n\n@SpringBootTest\nclass EmployeeRegistrationServiceTests {\n\n\t@Autowired\n\tEmployeeRegistrationService employeeRegistrationService;\n\n\t@MockBean\n\tprivate EmployeeRepository employeeRepository;\n\n\t@Test\n\tvoid testGetEmployeeById() throws EmployeeNotFoundException {\n\t\twhen(employeeRepository.findById(1L)).thenReturn(Optional\n\t\t\t\t.of(Employee.builder().designation("Test").id(1L).location("Test").name("Test").salary(1L).build()));\n\t\tassertEquals(\n\t\t\t\tEmployeeResponse.builder().status(Constants.SUCCESS)\n\t\t\t\t\t\t.data(EmployeeResponseData.builder().executed(true).id(1L).name("Test").designation("Test")\n\t\t\t\t\t\t\t\t.location("Test").salary(1L).build())\n\t\t\t\t\t\t.build(),\n\t\t\t\temployeeRegistrationService.getEmployeeById(1L));\n\t}\n\n\t@Test\n\tvoid testCreateEmployee() {\n\t\tEmployee emp = Employee.builder().designation("Test").id(1L).location("Test").name("Test").salary(1L).build();\n\t\twhen(employeeRepository.save(emp)).thenReturn(emp);\n\t\tassertEquals(\n\t\t\t\tEmployeeResponse.builder().status(Constants.SUCCESS).appId("Test").transactionId("Test")\n\t\t\t\t\t\t.data(EmployeeResponseData.builder().executed(true).name("Test").designation("Test")\n\t\t\t\t\t\t\t\t.location("Test").salary(1L).build())\n\t\t\t\t\t\t.build(),\n\t\t\t\temployeeRegistrationService.createEmployee(EmployeeRequest.builder().appId("Test")\n\t\t\t\t\t\t.designation(emp.getDesignation()).location(emp.getLocation()).name(emp.getName())\n\t\t\t\t\t\t.salary(emp.getSalary()).transactionId("Test").build()));\n\n\t}\n\n\t@Test\n\tvoid testFetchAllEmployees() {\n\t\tList<Employee> employees = new ArrayList<>();\n\t\temployees.add(Employee.builder().designation("Test").id(1L).location("Test").name("Test").salary(1L).build());\n\t\temployees\n\t\t\t\t.add(Employee.builder().designation("Test1").id(1L).location("Test1").name("Test1").salary(2L).build());\n\t\temployees\n\t\t\t\t.add(Employee.builder().designation("Test2").id(1L).location("Test2").name("Test2").salary(3L).build());\n\n\t\twhen(employeeRepository.findAll()).thenReturn(employees);\n\t\tassertEquals(employees, employeeRegistrationService.fetchAllEmployees());\n\t}\n\n\t@Test\n\tpublic void testDeleteEmployeeById() throws EmployeeNotFoundException {\n\t\temployeeRegistrationService.deleteEmployeeById(1L);\n\t\tverify(employeeRepository, times(1)).deleteById(1L);\n\t}\n\n}\n\n\n```\n '}}]);