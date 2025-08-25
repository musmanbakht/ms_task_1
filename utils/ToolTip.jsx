import { Tooltip } from "@mantine/core";

const TooltipWrapper = ({
  label,
  children,
  position = "top-start",
  withArrow = true,
}) => {
  return (
    <Tooltip
      label={label}
      position={position}
      withArrow={withArrow}
      style={{
        maxWidth: "350px",
        whiteSpace: "normal",
        wordWrap: "break-word",
      }}
    >
      <span className="cursor-pointer">{children}</span>
    </Tooltip>
  );
};

export default TooltipWrapper;
