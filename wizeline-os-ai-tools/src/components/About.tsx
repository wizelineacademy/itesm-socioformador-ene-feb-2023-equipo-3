import EditButton from "./EditButton";

export default function About() {
    return(
        <>
            <div className="flex justify-between">
                <h1 className="font-inter text-2xl font-semibold mb-3">About</h1>
                <EditButton/>
            </div>
            <p className="font-inter text-base font-light mr-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo lorem ligula, id feugiat ex condimentum et. Maecenas ultrices ipsum posuere rhoncus suscipit. Etiam vel blandit mi, ut mattis libero. Phasellus laoreet mi ligula, quis scelerisque velit porttitor vel. Nulla sollicitudin, eros vitae finibus fermentum, odio justo consequat ante, ut pretium mauris nulla quis augue. Etiam suscipit sollicitudin enim ut fermentum. Nullam pulvinar faucibus volutpat. Praesent egestas, quam non pretium congue, lectus eros ultrices nunc, et lacinia risus est a quam. Aenean maximus, leo eget molestie vehicula, ante dolor lacinia erat, sit amet bibendum lorem enim nec mi.</p>
        </>
    )
}