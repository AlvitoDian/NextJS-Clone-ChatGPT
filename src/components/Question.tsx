export default function Question({ content }) {
  return (
    <div className="flex justify-center mx-[12px] mt-[19px] mb-[20px]">
      <div className="w-full max-w-[768px] bg-transparent flex items-start justify-end">
        <div className="flex mt-[3px] max-w-[273px] md:max-w-[505px] bg-[#2F2F2F] rounded-[24px]">
          <div className="text-[#ececec] text-[16px] mx-[20px] my-[10px]">
            <p>{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
