const ShopItemSkeleton = () => {
  return (
    <div className="block rounded-lg p-4 bg-slate-100 shadow animate-pulse">
      <div className="h-56 w-full rounded-md bg-gray-300" />
      <div className="mt-2 space-y-2">
        <div className="h-4 bg-gray-300 rounded w-1/3" />
        <div className="h-4 bg-gray-400 rounded w-2/3" />
        <div className="mt-4 flex gap-4">
          <div className="h-4 bg-gray-300 rounded w-1/4" />
          <div className="h-4 bg-gray-300 rounded w-1/4" />
          <div className="h-4 bg-gray-300 rounded w-1/4" />
        </div>
        <div className="mt-3 h-8 bg-gray-300 rounded w-full" />
      </div>
    </div>
  );
};

export default ShopItemSkeleton;
