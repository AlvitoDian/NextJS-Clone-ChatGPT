export default function PricingCard({
  id,
  isLogo,
  type,
  price,
  buttonTitle,
  buttonColor,
  features,
  termCondition,
}) {
  return (
    <div className="flex-col pl-[24px] pr-[25px] pt-[25px] max-w-[341px] border-r-[1px] border-r-[#3e3e3e] h-[462px]">
      <div>
        <span className="text-white font-semibold text-[20px] leading-[28px]">
          {type}
        </span>
      </div>
      <div>
        <span className="text-[#b4b4b4] text-[16px] leading-[24px]">
          {price}
        </span>
      </div>
      <div className="border-[1px] border-[#3e3e3e] rounded-full py-[13px] flex justify-center items-center w-[292px] my-[20px]">
        <span className="text-[#8a8a8a] text-[14px] font-roboto-bold">
          {buttonTitle}
        </span>
      </div>
      {features.map((feature) => (
        <div className="flex" key={feature.id}>
          <div className="w-[16px] h-[16px] mt-[3px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="#ffffff"
                d="M18.063 5.674a1 1 0 0 1 .263 1.39l-7.5 11a1 1 0 0 1-1.533.143l-4.5-4.5a1 1 0 1 1 1.414-1.414l3.647 3.647 6.82-10.003a1 1 0 0 1 1.39-.263"
              ></path>
            </svg>
          </div>
          <div className="ml-[8px]">
            <span className="text-[14px] leading-[20px] text-white">
              {feature.name}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
