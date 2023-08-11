# Next-Auth Login Authentication - 101

This project demonstrates a basic login authentication example using Next.js and the Next-Auth library. The project provides a simple login system where users can log in with a hardcoded username/password or through their GitHub accounts.

## Screenshots
![image](https://github.com/gurkanyigitgr/next-auth-app/assets/110620986/dad81934-72c3-4fba-99fd-99fbf73cdf7f)
![image](https://github.com/gurkanyigitgr/next-auth-app/assets/110620986/72f053f6-13df-40a4-9dae-68c496fe174e)
![image](https://github.com/gurkanyigitgr/next-auth-app/assets/110620986/7f919351-1b26-40e6-a44c-cc755eac33d9)
![image](https://github.com/gurkanyigitgr/next-auth-app/assets/110620986/f0aa2b4c-fa08-4c36-bacd-d0d3694867d1)



## Getting Started
1. Clone the project to your computer or download and extract the ZIP file.
2. Open the terminal and navigate to the project folder:

   
``` cd next-auth-app ```
1. Install the necessary dependencies by running the following command:

``` npm install ```

1. For Github OAuth settings :
- Go to the GitHub Developer Settings page.
- Create a new OAuth application:
  . Provide an appropriate "Application name" (e.g., Next-Auth Login Tutorial).
  . In the "Homepage URL" field, enter http://localhost:3000.
  . In the "Authorization callback URL" field, enter 'http://localhost:3000/api/auth/callback/github'.
- Copy the "Client ID" and "Client Secret" values of the created application.
2. Create a file named .env.local in the project root directory and add the following content:

``` GITHUB_CLIENT_ID=<GitHub Client ID> ```
``` GITHUB_CLIENT_SECRET=<GitHub Client Secret>```

Replace <GitHub Client ID> and <GitHub Client Secret> with the corresponding values from your GitHub OAuth application.

1. Start the project by running the following command:

``` npm run dev ```
The project should now be running at http://localhost:3000. Open your browser and navigate to this address to see the project.
