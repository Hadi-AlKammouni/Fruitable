import home from '../../assets/home.png';
// import add from '../../assets/add.png';
// import edit from '../../assets/edit.png';
import orders from '../../assets/orders.png';
import stock from '../../assets/stock.png';

export const SidebarPages = [    
    {
        link: "reviews",
        icon: home,
        heading: "Reviews"
    },
    {
        link: "stock",
        icon: stock,
        heading: "My Stock"
    },
    // {
    //     link: "add_item",
    //     icon: add,
    //     heading: "Add Item"
    // },
    // {
    //     link: "edit_item",
    //     icon: edit,
    //     heading: "Edit Item"
    // },
    {
        link: "manage_orders",
        icon: orders,
        heading: "Manage Orders"
    },
    {
        link: "chat",
        icon: orders,
        heading: "Chats"
    }
]

