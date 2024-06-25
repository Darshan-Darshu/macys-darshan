import { MailIcon } from "lucide-react";

function Info({ index }: { index: number }) {
  return (
    <div
      className={`${index !== 3 && "border-r"} ${
        index !== 0 && "pl-8"
      } border-gray-200 cursor-pointer`}
    >
      <MailIcon className='h-6 w-6' />
      <p className='text-lg'>Sign up for emails &</p>
      <p className='text-lg font-semibold'>
        get an extra 25% off
      </p>
      <p className='mt-1 text-sm'>
        Save on your next purchase & discover our latest
        offers. Exclusions apply. Valid for international
        customers only
      </p>

      <p className='mt-4 underline font-semibold'>
        Sign Up
      </p>
    </div>
  );
}

export default Info;
