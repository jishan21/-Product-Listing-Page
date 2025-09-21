
const colors = ['#007bff', '#dc3545', '#212529', '#ffc107', '#fd3a84', '#f8f9fa'];

function ColorFilter() {
  return (
    <div className="bg-zinc-100 p-6 rounded-lg shadow-sm w-full max-w-sm">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">COLOR</h3>
      <div className="flex items-center space-x-3">
        {colors.map((color, index) => (
          <button
            key={index}
            className="w-6 h-6 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            style={{ backgroundColor: color }}
            aria-label={`Color ${color}`}
          />
        ))}
      </div>
    </div>
  );
}

export default ColorFilter;