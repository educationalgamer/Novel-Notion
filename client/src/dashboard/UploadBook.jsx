import {useState} from "react";
import { Select,Button,Textarea, Label, TextInput } from "flowbite-react";
const UploadBook = () => {
  const bookCategories = [
    "Horror",
    "Psychology",
    "Mystery",
    "Programming",
    "Science",
    "Fantasy",
    "Bibliography"
  ];

  const [selectedBookCategory, selectedBookCategorySet] = useState(bookCategories[0]);
  const handleChangeSelectionValue=(event)=>{
    console.log(event.target.value);
    selectedBookCategorySet(event.target.value);
  }

  // handle book submission
  const handleBookSubmit=(event)=>{
    event.preventDefault();
    const form=event.target;
    const title=form.title.value;
    const authorName=form.authorName.value;
    const imageURL=form.imageURL.value;
    const category=form.category.value;
    const description=form.description.value;
    const pdfURL=form.pdfURL.value;
    const price=form.price.value;

const bookObj={
  title,authorName,imageURL,category,description,pdfURL,price
}

fetch("http://localhost:3000/upload-book",{
  method:"POST",
  headers:{
    "Content-Type":"application/json"
  },
  body:JSON.stringify(bookObj)
}).then(res=>res.json()).then(data=>{
  alert("Book uploaded Successfully!");
  form.reset();
});
}

  
  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Upload A book</h2>
      <form onSubmit={handleBookSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        {/* first row */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="BookTitle" value="Book Title" />
            </div>
            <TextInput
              id="title"
              placeholder="Book name"
              required
              type="text"
            />
          </div>
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput
              id="authorName"
              placeholder="Author Name"
              required
              type="text"
            />
          </div>
        </div>
        {/* second row */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book Image URL" />
            </div>
            <TextInput
              id="imageURL"
              placeholder="imageURL"
              required
              type="text"
            />
          </div>
          {/* catogory */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
            <Label htmlFor="category" value="Book Category" />
            </div>
            <Select id='category' name="category" className="w-full rounded" value={selectedBookCategory} onChange={handleChangeSelectionValue}>
              {
                bookCategories.map((option)=>(
                  <option key={option} value={option}>{option}</option>
                ))
              }
            </Select>
          </div>
        </div>
        {/* bookdescription */}
        <div>
        <div className="mb-2 block">
            <Label htmlFor="description" value="Book Description" />
            </div>
          <Textarea
              id="description"
              placeholder="Write your book Description......"
              className="w-full rounded"
              required
              rows={7}
            />
        
        </div>

        {/* book pdf link */}
        <div>
          <div className="mb-2 block">
          <Label htmlFor="pdfURL" value="Book PDF URL" />
          </div>
          <TextInput
              id="pdfURL"
              placeholder="Book PDF URL"
              required
              type="text"
            />
        </div>
        {/* set price */}
        <div>
          <div className="mb-2 block">
          <Label htmlFor="price" value="Set Price" />
          </div>
          <TextInput
              id="price"
              placeholder="Set price in INR"
              required
              type="number"
            />
        </div>

        <Button type="Submit" className="mt-5">Upload Book</Button>

      </form>
      
    </div>
  );
};

export default UploadBook;
