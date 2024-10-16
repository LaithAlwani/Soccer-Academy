import Hero from "@/components/Hero";
import RegistrationForm from "@/components/RegistrationForm";
import Program from "@/models/program";
import connectToDB from "@/utils/database";

const getPrograms = async () => {
  await connectToDB();
  const programs = await Program.find().sort("createdAt");
  return programs;
};

export const metadata = {
  title: "Register",
};

export default async function RegisterPage() {
  const programs = await getPrograms();

  return (
    <>
      <Hero image="/register.jpg" alt="" title="Registration" />
      <RegistrationForm programs={programs} />
    </>
  );
}
