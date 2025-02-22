import type IFormParams from "types/form-params.type"

interface IFormProps {
    runSimulation: (formData: FormData) => Promise<IFormParams>
}

export default IFormProps;