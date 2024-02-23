import Footersm from "@/components/Footersm";
import Returnhead from "@/components/Returnhead";

const page = () => {
  return (
    <main className="w-full flex flex-col overflow-hidden">
      <Returnhead />
      <div className="flex flex-col h-full my-64 items-center justify-center">
        <h1 className="text-3xl font-bold">Submit NFT page</h1>
        <p className="text-xl">Design for submission of work goes here</p>
      </div>
      <Footersm />
    </main>
  );
};

export default page;
