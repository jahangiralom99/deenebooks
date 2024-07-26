import { useForm } from "react-hook-form";
import { FaLock } from "react-icons/fa";
import { IoMdArrowDropup } from "react-icons/io";
import logo from "../../assets/IMG-20240626-WA0000-1-300x300.jpg";

const Order = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="bg-[#cdefff] mt-8 ">
      <div className="max-w-screen-xl mx-auto px-6 pt-8 pb-16">
        <h1 className="bg-black p-2 text-2xl text-white font-bold">
          অর্ডার করতে নিচের ফর্মটি সম্পূর্ন পূরন করুন।
        </h1>
        <h1 className="text-3xl mt-6 font-bold">
          অর্ডার করতে 1 টাকাও অগ্রিম দিতে হবে না। আমরা সারা দেশে হোম ডেলিভারি
          দিয়ে থাকি।
        </h1>
        <h1 className="text-xl font-bold mt-7">
          অর্ডার করতে নিচের তথ্যগুলো দিন
        </h1>
        {/* order page  */}
        <div className="flex flex-col gap-8 justify-between mt-8 ">
          <div className="">
            <h2 className="font-bold text-xl">Billing details</h2>
            {/* form Start  */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mt-4 w-[50%]">
                <label className="block text-sm mb-2">
                  আপনার নাম লিখুন <span className="text-red-500">*</span>
                </label>
                <input
                  className=" focus:outline-none focus:shadow-outline rounded py-3 px-4 block text-sm w-full appearance-none"
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="নাম লিখুন"
                  id="name"
                  name="name"
                  autoComplete="name"
                />
                {errors.name && (
                  <p className="text-red-600">Name is Required</p>
                )}
              </div>
              <div className="mt-4">
                <label className="block text-sm mb-2">
                  আপনার ঠিকানা লিখুন <span className="text-red-500">*</span>
                </label>
                <input
                  className=" focus:outline-none focus:shadow-outline rounded py-3 px-4 block  text-sm w-full appearance-none"
                  type="text"
                  {...register("address", { required: true })}
                  placeholder="আপনার সম্পূর্ণ ঠিকানা লিখুন"
                  id="address"
                  name="address"
                  autoComplete="text"
                />
                {errors.address && (
                  <p className="text-red-600">
                    ঠিকানার তথ্যটি প্রয়োজনীয়
                  </p>
                )}
              </div>
              <div className="mt-4">
                <label className="block text-sm mb-2">
                  আপনার মোবাইল নাম্বারটি লিখুন
                  <span className="text-red-500">*</span>
                </label>
                <input
                  className=" focus:outline-none focus:shadow-outline  rounded py-3 px-4 block text-sm w-full appearance-none"
                  type="number"
                  {...register("phone", { required: true })}
                  placeholder="আপনার সম্পূর্ণ ফোন নম্বর লিখুন"
                  id="phone"
                  name="phone"
                  autoComplete="number"
                />
                {errors.phone && (
                  <p className="text-red-600">আপনার সম্পূর্ণ ফোন নম্বর তথ্যটি প্রয়োজনীয়</p>
                )}
              </div>
            </form>
          </div>
          {/*Your  order  */}
          <div className="">
            <h2 className="font-bold text-xl">Your order</h2>
            <div className="flex  text-sm font-semibold justify-between items-center gap-3 mt-5">
              <p>Product</p>
              <p>SubTotal</p>
            </div>
            <p className="border-b-2 border-dashed mt-2"></p>
            <div className="mt-5 flex items-center justify-between gap-3  text-sm font-semibold">
              <div className="flex items-center gap-3">
                <img className="w-24 rounded" src={logo} alt="" />
                <p>এক্সেল হেয়ার গ্রোথিং প্রিমিয়াম প্যাকেজ</p>
              </div>
              <div>
                <p>× 1 390.00৳ </p>
              </div>
            </div>
            <p className="border-b-2 border-dashed mt-5"></p>
            <div className="flex text-sm font-semibold justify-between items-center gap-3 mt-5">
              <p>SubTotal</p>
              <div>
                <p className="text-end">2,590.00 $</p>
                <div className="flex items-center gap-2">
                  <input
                    className="accent-red-500"
                    type="radio"
                    name="b"
                    id="background"
                  />
                  <p>পুরো বাংলাদেশ: ৳ 80.00</p>
                </div>
              </div>
            </div>
            <div className="flex text-sm font-semibold justify-between items-center gap-3 mt-5">
              <p>Shopping</p>
              <div className="flex items-center gap-2">
                <input className="accent-red-500" type="radio" name="" id="" />
                <p>ফ্রি ডেলিভারি</p>
              </div>
            </div>
            <p className="border-b-2 border-dashed mt-5 "></p>
            <div className="flex text-sm font-bold justify-between items-center gap-3 mt-5">
              <p>Total</p>
              <p>2,670.00 ৳</p>
            </div>
            <div className="bg-[#f4f8fa] relative p-4 mt-5 rounded">
              <div className="flex items-center gap-3">
                <p>ক্যাশ অন ডেলিভারি</p>
              </div>
              <div className="absolute top-6 left-6">
                <IoMdArrowDropup className="text-6xl text-[#eaeaea]" />
              </div>
              <p className="p-4 bg-[#eaeaea] mt-4 text-sm">
                পণ্য হাতে পেয়ে সম্পূর্ণ মূল্য পরিশোধ করতে হবে।
              </p>
            </div>
            <p className="mt-2 text-[#777] text-[12px]">
              Your personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our privacy policy.
              <span className="text-red-500">privacy policy.</span>
            </p>
            <div className="text-center mt-12 md:mt-12">
              <button className="px-6 w-full gap-3 py-6 flex flex-col items-center justify-center  font-bold text-white rounded-lg bg-[#f16334] hover:bg-[#b11111]">
                <FaLock />
                অর্ডার সম্পূর্ণ করুন ৳ 2,670.00
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
