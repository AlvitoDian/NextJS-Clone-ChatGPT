export default function PricingCard() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[999]">
      <div className="bg-white p-[50px] rounded shadow-lg">
        <span>ANJAY</span>
        <button className="absolute top-2 right-2 text-gray-600">
          &times;
        </button>
      </div>
    </div>
  );
}
