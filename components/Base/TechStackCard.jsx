export default function TechStackCard({ name, description, imageSource }) {
  return (
    <div className="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border border-gray-100">
      {imageSource}
      <p className="font-bold mt-4">{name}</p>
      <p className="mt-2 text-sm text-gray-500">{description}</p>
    </div>
  );
}
