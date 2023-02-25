import React from 'react'

export default function FormLogin() {
  return (
    <div className='form'>
      <h3>Login</h3>
      <form>
        <table cellSpacing={10}>
          <tbody>

            <tr>
              <th>
                <label>Email:</label>
              </th>
              <td>
                <input type='text' name='email'/>
              </td>
            </tr>

            <tr>
              <th>
                <label>Password:</label>
              </th>
              <td>
                <input type='text' name='password'/>
              </td>
            </tr>

            <tr>
              <td colSpan={2} align='right'>
                <button>Login</button>
              </td>
            </tr>

            
          </tbody>
        </table>
      </form>
    </div>
  )
}
