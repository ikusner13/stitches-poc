import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Button from "../components/button/Button";
import { useState } from "react";
import styled from "styled-components";
import { sidekickThemeLight } from "../../stitches.config";
import { BellIcon } from "@heroicons/react/24/solid";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Button
          className={styles.button}
          onClick={() => setCount((c) => c + 1)}
        >
          test
        </Button>
        <StyledButton>test</StyledButton>
        <Button variant="primary">primary</Button>
        <Button variant="secondary">secondary</Button>
        <Button variant="primary" loading>
          loading
        </Button>
        <Button fullWidth>fullWidth</Button>
        <Button leadingIcon={<BellIcon />}>leadingIcon</Button>
        <div className={sidekickThemeLight}>
          <Button>sidekickButton</Button>
        </div>
        <h1>{count}</h1>
      </main>
    </>
  );
}

const StyledButton = styled(Button)`
  border-radius: 4px;
  font-size: 16px;
  padding: 8px 12px;
  border: 2px solid #00b4d8;
  color: #00b4d8;
`;
