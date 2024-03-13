(this["webpackJsonppraveenoruganti-courses"]=this["webpackJsonppraveenoruganti-courses"]||[]).push([[227],{796:function(e,n,t){"use strict";t.r(n),n.default=' **What are authentication and authorization? Which must come first?**\n\n**Authentication**\n\n- Determination of who\n- Technically it is the determination if a principal is who they say they are\n- Principals can be human or machines\n\nIn Spring Security, the authentication process consists of the following steps quoted from the Spring Security reference:\n\n- The username and password are obtained and combined into an instance of UsernamePasswordAuthenticationToken (an instance of the Authentication interface).\n- The token is passed to an instance of AuthenticationManager for validation.\n- The AuthenticationManager returns a fully populated Authentication instance on successful authentication.\n- The security context is established by calling SecurityContextHolder.getContext()\n  .setAuthentication(\u2026), passing in the returned authentication object.\n\n**Authorization**\n\n- Determines what the principal can or cannot do\n- Authorization is based on authentication\n- Authorization is often called as access control\n\nAuthorization typically involves the following two separate aspects that combine to describe the accessibility of the secured system:\n\n- The first is the mapping of an authenticated principal to one or more authorities (often called roles);\n- The second is the assignment of authority checks to secured resources of the system.\n\n**Which must come first?**\n\nUnless there is some type of authorization that specifies what resources and/or functions that can be accessed by anonymous users, authentication must always come before authorization.\n\n![screenshot of the app](https://praveenoruganti.github.io/courses/images/springboot/security.jpg)\n\n**Application Security Framework**\n\n1. Login and Logout Functionality\n2. Allow/block access to URLs to logged in users\n3. Allow/block access to URLs to logged in users and with certain roles\n\n**Handles common vulnerabilities**\n\n1. Session fixation\n2. Clickjacking\n3. Click site forgery\n\n**With Spring Security we can do**\n\n1. Username/password Authentication\n2. SSO/Okta/LDAP\n3. App Level Authorization\n4. Intra App Authorization like OAuth\n5. Microservice security(using tokens,JWT)\n6. Method Level Security\n\n**5 Core concepts in Spring Security**\n\n1. **Authentication(Who is this User?)**\n   \n   Establishing that a principal\u2019s credentials are valid.\n\n2. **Authorization(Are they allowed to do this?)**\n   \n   Deciding if a principal is allowed to perform an action.\n   Authentication comes first before Authorization because authorization process needs principal object with authority votes to decide user allow to perform a action for secured resource.\n\n3. **Principal (currently logged in user(per request) and each user have multiple ID\'s)**\n   \n   The principal is the currently logged in user.\n\n4. **Granted Authority(fine grain permissions of what user can do)**\n   \n   GrantedAuthority as an individual privilege for example could include READ_AUTHORITY, WRITE_PRIVILEGE, or even CAN_EXECUTE_AS_ROOT.\n   When using a GrantedAuthority directly, such as through the use of an expression like hasAuthority(\u2018READ_AUTHORITY\u2019), we are restricting access in a fine-grained manner.\n\n5. **Roles(group of authorities that can be assigned to a user i.e.. coarse grained permissions(i.e.. grouping of permissions )**\n   \n   We can think of each Role as a coarse-grained GrantedAuthority that is represented as a String and prefixed with "ROLE". When using a Role directly, such as through an expression like hasRole("ADMIN"), we are restricting access in a coarse-grained manner.\n\n\n**Spring Security Flow**\n\n![screenshot of the app](https://praveenoruganti.github.io/courses/images/springboot/springsecurityflow.jpg)\n\n1. **AuthenticationFilter** : A filter that intercepts and performs authentication of a particular request by delegating it to the authentication manager If authentication is successful, the authentication details is set into SecurityContext.\n2. **Authentication** :  Using the supplied values from the user like username and password, the authentication object will be formed which will be given as an input to the AuthenticationManager interface.\n3. **AuthenticationManager** : Once received request from filter it delegates the validating of the user details to the authentication provider.\n4. **AuthenticationProvider** : It has all the logic of validating user details using UserDetailsService and PasswordEncoder.\n5. **UserDetailsService** : UserDetailsService retrieves UserDetails and implements the User interface using the supplied username.\n6. **PasswordEncoder** : Service interface for encoding passwords.\n7. **SecurityContext** :  Interface defining the minimum security information associated with the current thread of execution It holds the authentication data post successful authentication.\n\n**User Management**\n\n![screenshot of the app](https://praveenoruganti.github.io/courses/images/springboot/usermanagementdetails.jpg)\n\n- org.springframework.security.core.userdetails.UserDetails\n- org.springframework.security.core.userdetails.User\n- org.springframework.security.core.userdetails.UserDetailsService\n- org.springframework.security.provisioning.UserDetailsManager\n- org.springframework.security.provisioning.InMemoryUserDetailsManager\n- org.springframework.security.provisioning.JdbcUserDetailsManager\n- org.springframework.security.ldap.userdetails.LdapUserDetailsManager\n  \n\n '}}]);