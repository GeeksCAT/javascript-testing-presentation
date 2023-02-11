import styled from "styled-components";

const BarLine = styled.div`
  transition: height 0.5s;
  width: 40px;
  border-radius: 10px;
`;

export interface BarProps {
  value: number;
  color: string;
}

export default function Bar({ value, color }: BarProps) {
  return <BarLine style={{ 
    height: `${value}%`, 
    background: color, 
  }} />
}