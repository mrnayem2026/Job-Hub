import { getStoredCart } from "../utilities/fakedb";

const jobLoader = async () => {
    const loadedJobs = await fetch('/featuredJobs.json');
    const jobs = await loadedJobs.json();

    const storedJob = getStoredCart();

    const saveJob = []

    for (const id in storedJob) {
        const addedJob = jobs.find((job) => job.id === id);

        if (addedJob) {
            addedJob.quantity = storedJob[id];
            saveJob.push(addedJob)
        }


    }
    return saveJob;
}

export { jobLoader }