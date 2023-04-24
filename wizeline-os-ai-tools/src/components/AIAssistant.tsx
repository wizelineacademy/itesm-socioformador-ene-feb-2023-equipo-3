import SmartToyIcon from "@mui/icons-material/SmartToy";

export default function AIAssitant() {
  return (
    <div className="rounded-lg border border-solid border-gray-300 bg-white p-7">
      <div className="mb-3 ml-2 flex items-center gap-2">
        <SmartToyIcon className="content-center text-4xl" />
        <h2 className=" text-2xl font-semibold">Profile Assistant</h2>
      </div>
      <p className="font-light">
        The profile assitant is here to help to improve your profile in the
        click button. Once you've written something, click generate to get a new
        and improved suggestion.
      </p>
      <button className="w-full h-10 mt-5 rounded bg-[#00A7E5] px-4 py-2 font-bold text-white hover:bg-[#0076b0]">Generate</button>
      <div className="flex gap-10 hidden">
        <button className="border border-solid border-gray-400 bg-white p-7  w-1/2 h-10 mt-5 rounded px-4 py-2 font-bold text-gray-600 hover:bg-gray-400">Generate</button>
        <button className="w-1/2 h-10 mt-5 rounded bg-[#00A7E5] px-4 py-2 font-bold text-white hover:bg-[#0076b0]">Accept</button>
        
      </div>

    </div>
  );
}
