"use client"

import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import Guest from "../Layouts/Guest";
import { Checkbox, Input, Label, PasswordInput } from "../Inputs";
import Link from "next/link";
import Button from "../Commons/Button";

type Props = {
  status: string;
  canResetPassword: boolean;
};

export default function Login({ status, canResetPassword }: Props) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: "",
  });
  

  const [error, setError] = useState("");
  const [processing, setProcessing] = useState(false);

  const onHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value =
      event.target.type === "checkbox" ? event.target.checked : event.target.value;

    setFormData({
      ...formData,
      [event.target.name]: value,
    });
  };

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setProcessing(true);
    // Logic for form submission 
    try {
      // API call
      const response = await fetch('/api/sign-in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success (redirect)
      } else {
        // Handle error response
        const errorData = await response.json();
        setError(errorData.message || 'An error occurred');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('An unexpected error occurred, please try again.');
    } finally {
      setProcessing(false);
    }
  };

  useEffect(() => {
    return () => {
        setFormData(prevFormData => ({
            ...prevFormData,
            password: '', 
        }));
    };
}, []);

  const title = "Sign in";
  const subtitle = "Or";
  const linktext = "Join us";
  const link = "/join-us";

  return (
    <Guest title={title} subtitle={subtitle} linktext={linktext} link={link}>
      {/* <Head title={title} /> */}

      {status && (
        <div className="mb-4 font-medium text-sm text-green-600">{status}</div>
      )}

      {/*<ValidationErrors errors={errors} />*/}

      <form onSubmit={submit}>
        <div>
          <Label
            forInput="email"
            value="Email address"
            className="text-sm font-medium leading-tight text-gray-700"
          />

          <Input
            type="text"
            name="email"
            value={formData.email}
            className={`mt-1 block w-full`}
            autoComplete="username"
            isFocused={true}
            handleChange={onHandleChange}
            placeholder={"person@cool.com"}
            error={error}
          />
        </div>

        <div className="mt-4">
          <Label
            forInput="password"
            value="Password"
            className="text-sm font-medium leading-tight text-gray-700"
          />

          <PasswordInput
            name="password"
            value={formData.password}
            className="mt-1 block w-full"
            autoComplete="current-password"
            handleChange={onHandleChange}
            placeholder={"••••••••"}
            error={error}
          />
        </div>

        <div className=" mt-6 flex mb-6 justify-between">
          <label className="flex items-center">
            <Checkbox
              name="remember"
              value={formData.remember}
              handleChange={onHandleChange}
            />

            <span className="ml-2 text-sm text-gray-600">Remember me</span>
          </label>
          <Link
            href="/password.request"
            className="text-sm font-medium hover:underline leading-tight text-right text-rose-700"
          >
            Forgot Your Password?
          </Link>
        </div>

        <Button processing={processing}>
          {" "}
          {processing ? (
            <div className="flex items-center gap-2">
              <Spinner />
              Sign in..
            </div>
          ) : (
            "Sign in"
          )}
        </Button>
      </form>
    </Guest>
  );
}
