import { Form } from "../../components/pages/users/Form";
import { UsersTable } from "../../components/pages/users/Table";
import { useUsersContext } from "../../context/UsersContext";
// import { useUsers } from "../../hooks/useUsers";

export default function UsersPage() {
  // const { user, users, deleteUser, handleSubmit, handleUser } = useUsers();

  // const { name } = useUsersContext();

  return (
    <>
      <h1>Página de usuários</h1>
      <p>Usuário: </p>
      {/* <Form handleSubmit={handleSubmit} handleUser={handleUser} user={user} /> */}
      <Form  />
      <UsersTable  />
      {/* <UsersTable deleteUser={deleteUser} users={users} /> */}
    </>
  );
}