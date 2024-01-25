"use client"

import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import TermsModal from "../Commons/TermsModal";
import {
  Input,
  Label,
  PasswordInput,
  PhoneInput,
  SelectCountryCodeInput,
} from "../Inputs";
import Guest from "../Layouts/Guest";
import { useRouter } from "next/navigation";
import Head from "next/head";
import Button from "../Commons/Button";

export default function Register() {
  const router = useRouter();

  const [termsAgreement, setTermsAgreement] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    phone_number: "",
    country_code: "+254",
    password: "",
    referral_code: "",
  });

  const [processing, setProcessing] = useState(false);

  const handleTerms = (event: any) => {
    if (event.target.checked) {
      setTermsAgreement(true);
    } else {
      setTermsAgreement(false);
    }
  };

  const onHandleChange = (event: any) => {
    setFormData({
      ...formData,
      [event.target.name]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    });
  };

  const submit = async (e: any) => {
    e.preventDefault();

    if (!termsAgreement) {
      setError("You must agree to the terms and conditions!");
      setTimeout(() => {
        setError("");
      }, 7000);
      return;
    }

    setError("");
    setProcessing(true);

    try {
      // Example API call using fetch
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Redirect to a success page or handle success as needed
        router.push("/success");
      } else {
        // Handle error response
        const errorData = await response.json();
        setError(errorData.message || "An error occurred");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("An unexpected error occurred");
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

  const title = "Join us";
  const subtitle = "Already have an account?";
  const linktext = "Sign in";
  const link = "/sign-in";

  return (
    <Guest title={title} subtitle={subtitle} linktext={linktext} link={link}>
      <Head>
        <title>{title}</title>
      </Head>

      {/* <ValidationErrors errors={errors} /> */}

      {error ||
        (error && (
          <div className="mb-4">
            <div className="bg-mjengo-red-500 text-white font-medium px-4 py-2 text-sm rounded-lg mb-2">
              {error}
            </div>
            <hr />
          </div>
        ))}

      <form>
        <div>
          <Label
            forInput="email"
            value="Email"
            className="text-sm font-medium leading-tight text-gray-700"
          />

          <Input
            type="email"
            name="email"
            value={formData.email}
            className="mt-1 block w-full"
            autoComplete="username"
            handleChange={onHandleChange}
            placeholder={"person@cool.com"}
            error={error}
          />
        </div>
        <div className="mt-4">
          <Label
            forInput="phone_number"
            value="Phone number"
            className="text-sm font-medium leading-tight text-gray-700"
          />
          <div className="inline-flex w-full">
            <SelectCountryCodeInput
              name="country_code"
              value={formData.country_code}
              className="mt-1"
              handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFormData({
                  ...formData,
                  country_code: e.target.value,
                })
              }
              placeholder="Phone Number"
              error={error}
            />
            <PhoneInput
              name="phone_number"
              value={formData.phone_number}
              className="mt-1 block flex-2"
              handleChange={onHandleChange}
              error={error}
            />
          </div>
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
            autoComplete="new-password"
            handleChange={onHandleChange}
            placeholder={"••••••••"}
            error={error}
          />
        </div>
        <div className="mt-4">
          <Label
            forInput="referral_code"
            value="Referral code (Optional)"
            className="text-sm font-medium leading-tight text-gray-700"
          />

          <Input
            type="text"
            name="referral_code"
            value={formData.referral_code}
            className="mt-1 block w-full"
            autoComplete="off"
            isFocused={true}
            handleChange={onHandleChange}
            placeholder={"XXXXX"}
            error={error}
          />
        </div>

        <div className="mt-4 flex items-end">
          <input
            className="rounded border-gray-300 text-red-700 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"
            type="checkbox"
            value=""
            id="flexCheckChecked"
            onChange={handleTerms}
            checked={termsAgreement}
            placeholder="Terms and Conditions"
          />
          <button
            type="button"
            onClick={() => setOpenModal(true)}
            className="text-sm leading-tight font-medium hover:underline text-sky-500 ml-2"
          >
            Terms and Conditions
          </button>
        </div>

        <Button className="mt-6" processing={processing}>
          {processing ? (
            <div className="flex items-center gap-2">
              <Spinner />
              Joining.Please wait..
            </div>
          ) : (
            "Join"
          )}
        </Button>
      </form>

      <TermsModal open={openModal} setOpen={setOpenModal} />
    </Guest>
  );
}
