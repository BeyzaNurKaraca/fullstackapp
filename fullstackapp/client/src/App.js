import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]); //hooks useefect ten gelen verileri kalıcı olarak tutmak için
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [username, setUserName] = useState("");
  const [img, setImg] = useState("");
  useEffect(() => {
    axios //gelen anlık verileri tutarız
      .get("http://localhost:3050/getUsers")
      .then((response) => setUsers(response.data))
      .catch((error) => console.log(error));
  }, [users]);

  const createUser = () => {
    axios
      .post("http://localhost:3050/createUser", {
        name: name,
        age: age,
        username: username,
        img: img,
      })
      .then((res) => {
        alert("User Created");
      });
  };
  return (
    <div className="container bg-dark">
      <h1 className="text-center text-danger">USER LIST</h1>
      <div className="row">
        {users.map(
          (
            user //mapleyince ne kadar veri varsa o kadar tekrar ediyor içine yazılan divleri vs.
          ) => (
            <div className="col-md-4 col-sm-12">
              <div className="card radius-15">
                <div className="card-body text-center">
                  <div className="p-4 border radius-15">
                    <img //fotoğtafı olmayan kişi için default bi foto atama yapmak için ternary kullanırız
                      src={
                        user.img === ""
                          ? "https://hope.be/wp-content/uploads/2015/05/no-user-image.gif"
                          : user.img
                      } //turnary operatörünü kullandık.
                      width={110}
                      height={110}
                      className="rounded-circle shadow"
                      alt=""
                    />

                    <h5 className="mb-0 mt-5">{user.name}</h5>
                    <p className="mb-3">{user.username}</p>
                    <p className="mb-3">Age: {user.age}</p>
                    <input
                      className="form-control p-1 m-1"
                      placeholder="Güncellenecek İsmi Giriniz"
                    ></input>
                    <input
                      className="form-control p-1 m-1"
                      placeholder="Güncellenecek Yaşı Giriniz"
                    ></input>
                    <button className="btn btn-primary">Güncelle</button>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
        ;
      </div>
      <div className="col">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <h2> CREATE A USER</h2>
                <form>
                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="İsim Giriniz."
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Yaşınızı Giriniz."
                      onChange={(e) => setAge(e.target.value)}
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Kullanıcı Adınızı Giriniz."
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Fotoğraf Linki Giriniz."
                      onChange={(e) => setImg(e.target.value)}
                    />
                  </div>
                  <div className="d-flex justify-content-center">
                    <button
                      type="button"
                      className="btn btn-success"
                      onClick={createUser}
                    >
                      Kullanıcıyı Kaydet
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
