const SkeletonCard = () => (
  <div className="glass-card overflow-hidden animate-pulse">
    <div className="w-full aspect-square bg-muted" />
    <div className="p-4 space-y-3">
      <div className="h-3 bg-muted rounded w-1/3" />
      <div className="h-4 bg-muted rounded w-2/3" />
      <div className="h-3 bg-muted rounded w-1/4" />
      <div className="h-5 bg-muted rounded w-1/3" />
    </div>
  </div>
);

export default SkeletonCard;
