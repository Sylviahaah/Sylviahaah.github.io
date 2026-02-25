import { useScrollProgress } from '../../hooks/useScrollAnimation';

export default function ScrollProgress() {
    const progress = useScrollProgress();
    return (
        <div
            id="scroll-progress"
            style={{ width: `${progress}%` }}
            aria-hidden="true"
        />
    );
}
