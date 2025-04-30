export default function Sidebar() {
  return (
    <div className="space-y-6">
      {/* Example widget: index prices */}
      <div className="p-4 bg-white border rounded-lg">
        <h4 className="font-semibold mb-2">Markets</h4>
        {/* Placeholder for live ticker component */}
        <ul className="space-y-1 text-sm">
          <li>SPX: 4,200.34</li>
          <li>VIX: 18.23</li>
          <li>Gold: $1,850.67</li>
          <li>BTC: $65,432.10</li>
        </ul>
      </div>
      {/* Additional widgets for commodities, currencies, crypto... */}
    </div>
  );
}
