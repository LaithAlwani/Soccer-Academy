import RegistrationForm from "@/components/RegistrationForm";
import Program from "@/models/program";
import connectToDB from "@/utils/database";

// const getPrograms = async () => {
//   await connectToDB();
//   const programs = await Program.find();
//   return programs;
// };

export default async function RegisterPage() {
  // const programs = await getPrograms();

  return (
    <section>
      <RegistrationForm />
    </section>
  );
}
