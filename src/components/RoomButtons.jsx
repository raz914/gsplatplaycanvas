import burgerIcon from '../assets/burgerIcon.png';
import locationIcon from '../assets/locationIcon.png';
import icon3D from '../assets/3DIcon.png';

const buttons = [
  { id: 1, icon: burgerIcon, alt: "Menu" },
  { id: 2, icon: locationIcon, alt: "Location" },
  { id: 3, icon: icon3D, alt: "3D View" },
];

export default function RoomButtons({ onClick }) {
  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
      {buttons.map(({ id, icon, alt }) => (
        <button
          key={id}
          onClick={() => onClick(id)}
          className="bg-transparent p-3 rounded-xl hover:bg-[#cda632] transition-all duration-100"
        >
          <img
            src={icon}
            alt={alt}
            className="w-10 h-10 transition-transform duration-100 hover:scale-110"
          />
        </button>
      ))}
    </div>
  );
}
