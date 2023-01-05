// // Import the React library
// import React from 'react';

// // Declare the Home component, which returns a form for registering and logging in
// export default function Home() {
//   return (
//     // Render a div container containing the registration and login forms
//     <div>
//       {/* Render the registration form */}
//       <h1>Registration</h1>
//       <form action="/api/register" method="post">
//         <div>
//           {/* Render the email input field */}
//           <label>Email Address:</label>
//           <input type="email" name="email" placeholder="Type your email" />
//         </div>
//         <div>
//           {/* Render the password input field */}
//           <label>Password:</label>
//           <input type="password" name="password" placeholder="Type your password" />
//         </div>
//         <div>
//           {/* Render the submit button for the registration form */}
//           <input type="submit" value="Register" />
//         </div>
//       </form>

//       {/* Render the login form */}
//       <h1>Login</h1>
//       <form action="/api/login" method="post">
//         <div>
//           {/* Render the email input field */}
//           <label>Email Address:</label>
//           <input type="email" name="email" placeholder="Type your email" />
//         </div>
//         <div>
//           {/* Render the password input field */}
//           <label>Password:</label>
//           <input type="password" name="password" placeholder="Type your password" />
//         </div>
//         <div>
//           {/* Render the submit button for the login form */}
//           <input type="submit" value="Login" />
//         </div>
//       </form>
//     </div>
//   );
// }






import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  const handleAdminButtonClick = () => {
    router.push('/admin');
  };

  return (
    // Render a div container containing the registration and login forms
    <div>
      {/* Render the registration form */}
      <h1>Registration</h1>
      <form action="/api/register" method="post">
        <div>
          {/* Render the email input field */}
          <label>Email Address:</label>
          <input type="email" name="email" placeholder="Type your email" />
        </div>
        <div>
          {/* Render the password input field */}
          <label>Password:</label>
          <input type="password" name="password" placeholder="Type your password" />
        </div>
        <div>
          {/* Render the submit button for the registration form */}
          <input type="submit" value="Register" />
        </div>
      </form>

      {/* Render the login form */}
      <h1>Login</h1>
      <form action="/api/login" method="post">
        <div>
          {/* Render the email input field */}
          <label>Email Address:</label>
          <input type="email" name="email" placeholder="Type your email" />
        </div>
        <div>
          {/* Render the password input field */}
          <label>Password:</label>
          <input type="password" name="password" placeholder="Type your password" />
        </div>
        <div>
          {/* Render the submit button for the login form */}
          <input type="submit" value="Login" />
        </div>
      </form>

      {/* Render a divider */}
  <div style={{ margin: '20px 0' }}></div>

      {/* Render the admin button */}
      <button onClick={handleAdminButtonClick}>Admin</button>
    </div>
  );
}

