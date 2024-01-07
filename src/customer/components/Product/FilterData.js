export const color = [
  "White",
  "Black",
  "Red",
  "marun",
  "Being",
  "Pink",
  "Green",
  "Yellow",
];
export const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White" },
      { value: "beige", label: "Beige"},
      { value: "blue", label: "Blue"},
      { value: "brown", label: "Brown"},
      { value: "green", label: "Green"},
      { value: "purple", label: "Purple"},
      { value: "yellow", label: "Yellow"},
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "S", label: "S"},
      { value: "M", label: "M"},
      { value: "L", label: "L"},
      { value: "Xl", label: "XL"},
    ],
  },
];

export const singleFilter = [
  {
    id: "price",
    name: "Price",
    options: [
      { value: "159-399", label: "₹159 To ₹399"},
      { value: "399-999", label: "₹399 To ₹999"},
      { value: "999-1999", label: "₹999 To ₹1999"},
      { value: "1999-2999", label: "₹1999 To ₹2999"},
      { value: "2999-3999", label: "₹2999 To ₹3999"},
    ],
  },
  {
    id: "discount",
    name: "Discount Range",
    options: [
      { value: "20", label: "20% And Above", checked: false },
      { value: "30", label: "30% And Above", checked: false },
      { value: "40", label: "40% And Above", checked: false },
      { value: "50", label: "50% And Above", checked: false },
      { value: "60", label: "60% And Above", checked: false },
      { value: "70", label: "70% And Above", checked: false },
      { value: "80", label: "80% And Above", checked: false },
      { value: "90", label: "90% And Above", checked: false },
    ],
  },
  {
    id: "stock",
    name: "Availabilty",
    options: [
      { value: "in_stock", label: "In Stock", checked: false },
      { value: "out_of_stock", label: "Out Of Stock", checked: false },
    ],
  },
];

export const sortOptions = [
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];
