export default function Picture({
  src,
  alt = "",
  className,
  pictureClassName,
  loading,
  width,
  height,
  decoding,
}) {
  const base = src.replace(/\.[^.]+$/, "");
  return (
    <picture className={pictureClassName}>
      <source type="image/avif" srcSet={`${base}.avif`} />
      <source type="image/webp" srcSet={`${base}.webp`} />
      <img
        src={src}
        alt={alt}
        className={className}
        loading={loading}
        width={width}
        height={height}
        decoding={decoding}
      />
    </picture>
  );
}
