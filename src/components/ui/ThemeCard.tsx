"use client";
import { ThemeStyle } from "@/types";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { changeTheme } from "@/reducers/theme";
type Props = {
  theme: ThemeStyle;
};

export default function ThemeCard({ theme }: Props) {
  const currentTheme = useAppSelector((state) => state.theme.value);
  console.log("crruent theme is", currentTheme);
  const dispatch = useAppDispatch();

  return (
    <div
      onClick={() => dispatch(changeTheme(theme))}
      className=" transition delay-100 duration-300 ease-in-out hover:-translate-y-1  hover:bg-info-content  flex justify-center py-2 px-6"
    >
      {theme}
    </div>
  );
}
