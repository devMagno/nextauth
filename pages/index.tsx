import { FormEvent, useContext, useState } from "react";

import { AuthContext } from "../contexts/AuthContext";
import { withSSRGuest } from "../utils/withSSRGuest";

import styles from "../styles/Home.module.css";

export default function Home() {
  const [email, setEmail] = useState("diego@rocketseat.team");
  const [password, setPassword] = useState("123456");

  const { signIn } = useContext(AuthContext);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const data = {
      email,
      password,
    };

    await signIn(data);
  }

  return (
    <form className={styles.container} onSubmit={(e) => handleSubmit(e)}>
      <input
        type="email"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />
      <button type="submit">Entrar</button>
    </form>
  );
}

export const getServerSideProps = withSSRGuest(async () => {
  return { props: {} };
});
