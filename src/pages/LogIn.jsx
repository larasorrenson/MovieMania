import React, { useState } from "react"
import { Input, Button } from "reactstrap"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")


  function login() {
    const url = 'http://sefdb02.qut.edu.au:3000/user/login'

    return fetch(url, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.error) {
          setError(response.message)
        } else {
          setError(null)
          setSuccess("Login successful")
        }

        if (response.token !== undefined) {
          localStorage.setItem("token", response.token)
          window.location.reload(false)
        }
      })
  }

  return (
    <div className = "authenticate_full">
      <div className="authenticate_container">
          <h1>Login</h1>

            {error != null ? (
              <p>{error}</p>
            ) : null}

            {success != null ? (
              <p>{success}</p>
            ) : null}

              <Input
                aria-labelledby="authenticate-button"
                placeholder="Email"
                name="email"
                id="email"
                type="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value)
                }}
              ></Input>
              <Input
                aria-labelledby="authenticate-button"
                placeholder="Password"
                name="password"
                id="password"
                type="password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value)
                }}
              ></Input>

            
            <Button id="authenticate-button" type="button" onClick={login}>
              Submit
            </Button>

            <p>
              Not a member?{" "}
              <a className="register__link" href="/register">
                Click here to register now!
              </a>
            </p>
      </div>
    </div>
  )
}

export default Login