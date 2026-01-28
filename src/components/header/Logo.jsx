import LogoImg from "../../assets/digital_ist.svg";

export function Logo() {
  return (
    <div className="min-w-fit flex items-center">
      <img className="w-12 mr-3" src={LogoImg} alt="Logo" />
      <span className="text-2xl font-bold">AppContext</span>
    </div>
  );
}
