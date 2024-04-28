import './UsersList.css';

const UsersList = ({ users }) => {
    return (
        <>
            <div className="table-wrapper">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Country</th>
                            <th>Mobile</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.length ? users.map(user => {
                                return (
                                    <tr key={user.id}>
                                        <td>{user.name}</td>
                                        <td>{user.age}</td>
                                        <td>{user.country}</td>
                                        <td>{user.mobile}</td>
                                        <td>{user.email}</td>
                                    </tr>
                                )
                            }) : <tr>
                                <td colSpan="5">Details not found</td>
                            </tr>
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default UsersList;