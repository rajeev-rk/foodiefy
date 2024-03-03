import { addItemToCart, selectCartItems } from '@/app/redux/cartSlice';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaMinus, FaPlus, FaCartPlus } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

const ProductCard = ({ item, handleAddToCart, handleDecreaseQuantity, handleIncreaseQuantity, selectedOption, setSelectedOption, selectedOptionArray, setSelectedOptionArray }) => {
    console.log("🚀 ~ ProductCard ~ selectedOptionArray:", selectedOptionArray)
    console.log("🚀 ~ ProductCard ~ item:", item)
    // const defaultOption = { "Select size":price };

    const Carts = useSelector(selectCartItems)

    // const handleChangePrice = (e) => {
    //     const selectedIndex = e.target.selectedIndex;
    //     const selectedSize = e.target.options[selectedIndex].getAttribute('data-size');
    //     const selectedPrice = e.target.options[selectedIndex].getAttribute('data-price');
    //     const itemId = e.target.options[selectedIndex].getAttribute('item-id');
    //     setSelectedOption({id:Number(itemId), [selectedSize]: parseFloat(selectedPrice) });
    // };

    const checkAvailability = (item1, item2) => {
        console.log("🚀 ~ checkAvailability ~ item2:", item2)
        console.log("🚀 ~ checkAvailability ~ item1, item2:", item1, item2);
        console.log(selectedOption)
        const lastObject = item1[item1.length - 1];
        console.log(Carts)
        // return item2?.some(option => {
        //     const { id, ...price } = option;
        //     return id === item1.id && Object.entries(price).every(([size, value]) => item1.price[size] === value);
        // });

        // const isAvailable = Object.entries(item2).every(([key, value]) => item1[key] === value);
        // console.log("🚀 ~ checkAvailability ~ isAvailable:", isAvailable)
        // return isAvailable

        const isInCartWithSamePrice = item2.every(item => {
            const foundItem = Carts.find(cartItem => {
                if (cartItem.id === item.id && cartItem.price) {
                    const cartItemKeys = Object.keys(cartItem.price);
                    const itemKeys = Object.keys(item);
                    if (cartItemKeys.length === itemKeys.length) {
                        return cartItemKeys.every(key => cartItem.price[key] === item[key]);
                    }
                }
                return false;
            });
            return foundItem !== undefined;
        });
        

        return isInCartWithSamePrice;
    };

    const isAlreadyInCart = () => {
        console.log("🚀 ~ isAlreadyInCart ~ item:", item)
        // console.log(isNaN(selectedOption.price))

        console.log(selectedOptionArray)
        const existingItemIndex = Carts.findIndex(cartI => {
            return cartI.id === item.id &&
                (cartI.price === item.price ||
                    checkAvailability(cartI, selectedOptionArray));
        });
        console.log("🚀 ~ existingItemIndex ~ existingItemIndex:", existingItemIndex)
        console.log("🚀 ~ existingItemIndex ~ Carts:", Carts)

        if (existingItemIndex !== -1) {

            console.log(Carts[existingItemIndex])
            return { isAlreadyInCart: true, quantity: Carts[existingItemIndex].quantity }
        } else {
            return false
        }
    };

    const [isInCart, setIsInCart] = useState({})

    useEffect(() => {
        // isAlreadyInCart();

        setIsInCart(isAlreadyInCart())
        console.log(item)
        console.log("🚀 ~ useEffect ~ isAlreadyInCart(item):", isAlreadyInCart())
    }, [selectedOptionArray, Carts, selectedOption]);

    const handleChangePrice = (e) => {
        const selectedIndex = e.target.selectedIndex;
        const selectedSize = e.target.options[selectedIndex].getAttribute('data-size');
        const selectedPrice = e.target.options[selectedIndex].getAttribute('data-price');
        const selectedItemId = e.target.options[selectedIndex].getAttribute('item-id');
        const itemId = e.target.options[selectedIndex].getAttribute('item-id');
        setSelectedOption({ id: Number(selectedItemId), [selectedSize]: parseFloat(selectedPrice) });
        const selectedOptionObj = {
            id: Number(selectedItemId),
            [selectedSize]: parseFloat(selectedPrice)
        };

        const isAlreadySelected = selectedOptionArray.some(option => {
            return JSON.stringify(option) === JSON.stringify(selectedOptionObj);
        });

        if (!isAlreadySelected) {
            setSelectedOptionArray(prevState => [...prevState, selectedOptionObj]);
        }

    };
    console.log("🚀 ~ isAlreadySelected ~ selectedOptionArray:", selectedOptionArray)
    console.log("🚀 ~ ProductCard ~ selectedPrice:", selectedOption)
    const dispatch = useDispatch()



    const onAddToCart = () => {

    }

    console.log(Carts)

    return (
        <div key={item.id} className='flex rounded-md border-blue-800 relative my-4 gap-4 border-[1.8px] shadow-md'>
            <div className='relative rounded-xl h-[140px] w-44'>
                <Image
                    src={item.image}
                    alt="Pic"
                    style={{ objectFit: "cover", borderRadiusLeft: "6px" }}
                    loading="lazy"
                    fill={true}
                />
                {/* <Image src={item.image} alt="Pic" style={{ objectFit: "cover", borderRadiusLeft: "6px" }} loading="lazy" /> */}
            </div>
            <div className='flex flex-col items-end w-full mr-2 py-2'>
                <h1 className='font-bold h-[50px] text-md'>{item.name}</h1>
                {typeof item.price === 'number' ? (
                    <p className='mb-2'>Price: {item.price}</p>
                ) : (
                    <div className='mb-2'>
                        <select className='border-2 p-1' value={selectedOption?.size} onChange={handleChangePrice}>
                            <option key="default" value="Select size" data-price={selectedOption?.price}>
                                Select Size
                            </option>
                            {Object.entries(item.price).map(([size, price]) => (
                                <option key={size} item-id={item.id} value={size} data-size={size} data-price={price}>
                                    {size}: {price}
                                </option>
                            ))}
                        </select>
                    </div>
                )}
                {isInCart.isAlreadyInCart ? (
                    <div className="flex items-center">
                        <button onClick={() => handleDecreaseQuantity(item)} className='bg-blue-200 font-sm gap-1 flex justify-center items-center w-8 h-8 rounded-md'><FaMinus /></button>
                        <span className="mx-2 text-blue-800 w-8 text-xl font-semibold h-8 items-center flex justify-center">{isInCart?.quantity}</span>
                        <button onClick={() => handleIncreaseQuantity(item)} className='bg-blue-200 font-sm gap-1 flex justify-center items-center w-8 h-8 rounded-md'><FaPlus /></button>
                    </div>
                ) : (
                    <button onClick={() => handleAddToCart({ ...item, price: typeof item.price === 'number' ? { "Normal": item.price } : selectedOption })} className='bg-blue-200 font-sm gap-1 flex justify-center items-center w-24 py-1 rounded-md'><FaCartPlus color='green' /> Add </button>
                )}
            </div>

        </div>
    );
};

export default ProductCard;
