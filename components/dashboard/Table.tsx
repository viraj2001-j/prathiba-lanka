export default function TableSection() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      
      {/* Orders */}
      <div className="md:col-span-2 bg-white p-6 rounded-3xl border border-green-200">
        <h3 className="mb-4 font-semibold text-green-900">
          Recent Orders
        </h3>

        <table className="w-full text-sm">
          <thead>
            <tr className="text-green-700 border-b">
              <th className="text-left py-2">Customer</th>
              <th>Product</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b">
              <td>John Doe</td>
              <td>Premium</td>
              <td>$2450</td>
              <td className="text-green-700">Completed</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Activity */}
      <div className="bg-white p-6 rounded-3xl border border-green-200">
        <h3 className="mb-4 font-semibold text-green-900">
          Activity
        </h3>

        <ul className="space-y-3 text-sm">
          <li>📝 New order</li>
          <li>👤 New user</li>
          <li>💰 Payment</li>
        </ul>
      </div>
    </div>
  );
}