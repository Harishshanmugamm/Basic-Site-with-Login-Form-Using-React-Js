const Content = () => {
  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">Table of Contents</h2>
      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mufeed</td>
            <td>21</td>
            <td>mufeed@gmail.com</td>
            <td>1234567890</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Harish</td>
            <td>20</td>
            <td>harishs@gmail.com</td>
            <td>1234567890</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Dhanu</td>
            <td>20</td>
            <td>dhanusubramani@gmail.com</td>
            <td>1234567890</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Kanishkar</td>
            <td>20</td>
            <td>kaniskdvd@gmail.com</td>
            <td>1234567890</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Addul Akram</td>
            <td>20</td>
            <td>abdulakram@gmail.com</td>
            <td>1234567890</td>
          </tr>
        </tbody>
      </table>

      <h2 className="my-4 text-center">Login Form</h2>
      <form>
        <div className="form-group">
          <label>Username</label>
          <input type="text" className="form-control" placeholder="Enter username" />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Enter password" />
        </div>

        <button type="submit" className="btn btn-primary btn-block">Login</button>
      </form>
    </div>
  );
};

export default Content;


