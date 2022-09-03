import { FormEvent, useContext, useState } from "react";
import type { NextPage } from "next";

import styles from "../styles/Home.module.css";
import { AuthContext } from "../contexts/AuthContext";

const Home: NextPage = () => {
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
};

export default Home;
