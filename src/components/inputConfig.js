export default {
  sellingPrice: {
    name: 'sellingPrice',
    required: true,
    id: "selling-price",
    label: "販売価格",
    endAdornment: "円",
  },
  cost: {
    name: 'cost',
    required: true,
    id: "cost",
    label: "原価",
    endAdornment: "円",
  },
  postage: {
    name: 'postage',
    required: false,
    id: "postage",
    label: "送料",
    endAdornment: "円",
  },
  commission: {
    name: 'commission',
    required: true,
    id: "commission",
    label: "手数料",
    endAdornment: "％",
  },
}