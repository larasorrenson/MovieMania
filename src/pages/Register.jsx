import React, { useState } from "react"
import { Input, Button } from "reactstrap"

function Register() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)

  function registerUser() {
    const url = "http://sefdb02.qut.edu.au:3000/user/register"

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
          setSuccess(null)
        } else {
          setSuccess("User successfully registered")
          setError(null)
        }

        console.log(response)
      })
  }

  return (
    <div className = "authenticate_full">
      <div className="authenticate_container">
          <h1>Register</h1>

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
            type="text"
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

          <Button
            id="authenticate-button"
            type="button"
            onClick={registerUser}
          >
            Submit
          </Button>

          <p>
            Already a member?{" "}
            <a className="register__link" href="/Login">
              Click here to Login!
            </a>
          </p>
      </div>
    </div>
    
  )
}

export default Register