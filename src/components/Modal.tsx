import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function Modal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className=" lg:px-[35px] px-6 py-6 rounded-[14px] border border-zinc-900 justify-center items-center inline-flex text-center text-black text-lg xl:text-xl font-normal font-montserrat leading-7"
          variant="outline"
        >
          {" "}
          Request a quote{" "}
        </Button>
      </DialogTrigger>

      <DialogContent className="border-0  ">
        <div className="bg-white px-4 py-4  rounded-[20px]">
          <form className="mx-auto max-w-xl ">
            <div className="grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="hidden text-sm font-semibold leading-6 text-gray-900"
                >
                  name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="given-name"
                    className="block w-full rounded-[10px] border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#062301] sm:text-sm sm:leading-6 bg-[#D9D9D9] "
                    placeholder="Name"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="hidden text-sm font-semibold leading-6 text-gray-900"
                >
                  email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-[10px] border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#062301] sm:text-sm sm:leading-6 bg-[#D9D9D9] "
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="message"
                  className="hidden text-sm font-semibold leading-6 text-gray-900"
                >
                  message
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    className="block w-full rounded-[10px] border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#062301] sm:text-sm sm:leading-6 bg-[#D9D9D9] "
                    placeholder="Type your message..."
                    rows={3}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="block w-full rounded-[10px] bg-[#062301] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#062301] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#062301] col-span-full font-jost"
              >
                SUBMIT{" "}
              </button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
