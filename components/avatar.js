export default function Avatar({ name, picture }) {
  return (
    <div className="flex items-center">
      <img src={picture} className="w-14 h-14 rounded-full mr-4" alt={name} />
      <div className="text-xl font-bold">{name}</div>
    </div>
  );
}
