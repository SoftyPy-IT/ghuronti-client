"use client";
import Image from "next/image";
import React from "react";
import agent from "../../public/assets/agent.png";
import facebook from "../../public/assets/facebook.png";
import google from "../../public/assets/google.png";
import style from "./LoginAgent.module.css";
import { useRouter } from "next/router";

const LoginAgent = () => {
  const router = useRouter();

  return (
    <section className={style.loginAgentWrap}>
      <div className="grid grid-cols-1 lg:grid-cols-2 place-content-center place-items-center">
        <div>
          <Image
           loading="lazy"
            src={agent}
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </div>
        <div>
          <form>
            <div className="mb-5">
              <label className={style.loginLabel}>Email Address</label> <br />
              <input
                name="email"
                type="email"
                placeholder="Email"
                className={style.loginInput}
              />
            </div>
            <div className="mb-5">
              <label className={style.loginLabel}>Password</label> <br />
              <input
                name="password"
                type="password"
                placeholder="Password"
                className={style.loginInput}
              />
            </div>
            <div className="mb-5">
              <label className={style.loginLabel}>Agent Number</label> <br />
              <input
                name="number"
                type="number"
                placeholder="Agent Number"
                className={style.loginInput}
              />
            </div>
            <div className="mb-5 ml-16 sm:ml-0 mt-10">
              <button className={style.loginBtn} type="submit">
                Login
              </button>
            </div>
            <div className="flex items-center">
              <p className={style.devided}></p>
              <span className="mx-2">or</span>
              <p className={style.devided}></p>
            </div>
            <div className="mb-5 ml-16 mt-5">
              <button className={style.loginBtn2} type="submit">
                Login as Agent
              </button>
            </div>
            <div className="mb-5 ml-16 mt-10">
              <button className={style.loginBtn3} type="submit">
                Create your account{" "}
              </button>
            </div>
            <div className={style.providerLoginWrap}>
              <div className={style.circle}>
                <button type="submit">
                  <Image
                   loading="lazy"
                    src={google}
                    alt="Picture of the author"
                    width={40}
                    height={20}
                  />
                </button>
              </div>
              <div className={style.circle}>
                <button type="submit">
                  <Image
                   loading="lazy"
                    src={facebook}
                    alt="Picture of the author"
                    width={40}
                    height={20}
                  />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginAgent;
