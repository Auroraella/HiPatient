import Image from "next/image";

const Register = async ({ params }: { params: { userId: string } }) => {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
          <Image
            src="/assets/icons/HiPatientlogo.png"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
          />

          <div className="space-y-6">
            <h1 className="header">Patient Registration</h1>
            <p className="text-dark-700">
              Welcome to HiPatient! You will complete your registration here.
            </p>
            <p className="text-dark-600">User ID: {params.userId}</p>

            <div className="text-green-500">
              ✅ User successfully created in Appwrite!
            </div>

            <p className="text-dark-600">
              This page is currently under development. The patient registration
              form will be available soon.
            </p>
          </div>

          <p className="copyright py-12">© 2025 HiPatient</p>
        </div>
      </section>

      <Image
        src="/assets/images/register-img.png"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[390px]"
      />
    </div>
  );
};

export default Register;
