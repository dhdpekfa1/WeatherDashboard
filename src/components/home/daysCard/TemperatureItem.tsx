interface TemperatureItemProps {
  color: "sky" | "red";
  temperature: number;
}

const TemperatureItem = ({ color, temperature }: TemperatureItemProps) => {
  return (
    <div className="w-full h-full flex items-start gap-[2px]">
      <span
        className={`roboto-medium scroll-m-20 text-lg font-semibold tracking-tight text-${color}-600`}
      >
        {temperature}
      </span>
      <span className="text-xs font-normal mt-1">&#8451;</span>
    </div>
  );
};

export { TemperatureItem };
