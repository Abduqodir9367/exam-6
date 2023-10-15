import { memo, useState } from "react";
import "./Add.scss";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Add = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [priceSale, setPriceSale] = useState("");
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");
  const [values, setValues] = useState({
    name: "",
    brand: "",
    code: "",
    description: "",
    price: "",
    priceSale: "",
  });

  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post(
        `https://64dcf61be64a8525a0f76c4d.mockapi.io/api/v1/products`,
        values
      );
      console.log(res)
      if (res.status === 201) {
        toast.success("Товар успешно добавлен");
        setName("");
        setPrice("");
        setPriceSale("");
        setBrand("");
        setDescription("");
        setTimeout(() => {
          navigate("/products");
        }, 1100);
      } else {
        toast.error("Ошибка при добавлении товара");
      }
    } catch (err) {
      console.log(err);
      toast.error("Ошибка при добавлении товара");
    }
  };
  return (
    <div className="Add">
      <div className="conatiner">
        <div className="big">
          <div className="add-content">
            <button className="head">Основные</button>

            <form onSubmit={handleSubmit}>
              <div className="inpt">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control inpt1"
                  required
                  onChange={(e) =>
                    setValues({ ...values, name: e.target.value })
                  }
                />
              </div>
              <div className=" inpt2">
                <div className="in1">
                  <label htmlFor="brand">Brand</label>
                  <input
                    type="text"
                    name="brand"
                    className="form-control inpt1"
                    required
                    onChange={(e) =>
                      setValues({ ...values, brand: e.target.value })
                    }
                  />
                </div>

                <div className="in1">
                  <label htmlFor="code">Article</label>
                  <input
                    type="text"
                    name="code"
                    className="form-control inpt1"
                    required
                    onChange={(e) =>
                      setValues({ ...values, code: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="inpt">
                <label htmlFor="comment">comment</label>
                <textarea
                  type="textarea"
                  name="description"
                  as="textarea"
                  className="form-control comment"
                  required
                  onChange={(e) =>
                    setValues({ ...values, description: e.target.value })
                  }
                />
              </div>

              <div className="last">
                <div className="in1">
                  <label htmlFor="price">Price</label>
                  <input
                    type="text"
                    name="price"
                    className="form-control inpt1"
                    required
                    onChange={(e) =>
                      setValues({ ...values, price: e.target.value })
                    }
                  />
                </div>

                <div className="in1">
                  <label htmlFor="priceSale">priceSale</label>
                  <input
                    type="text"
                    name="priceSale"
                    className="form-control inpt1"
                    required
                    onChange={(e) =>
                      setValues({ ...values, priceSale: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="btns">
                <button type="submit" onClick={() => handleSubmit()}>
                  Add
                </button>
                <ToastContainer />
                <Link to={-1}>
                  <button>Cancel</button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Add);
