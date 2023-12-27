import { Dispatch, SetStateAction } from 'react'
import {toast} from 'sonner'

export function toggleState(setState: Dispatch<SetStateAction<boolean>>): void {
	setState((prevState) => !prevState)
}

export function map(e1: any, e2: any): Map<boolean, any> {
	return new Map([
		[true, e1],
		[false, e2],
	])
}

export function getNextElement<T>(
	array: T[],
	currentIndex: number,
	setState: Dispatch<SetStateAction<number>>
) {
	const nextIndex = (currentIndex + 1) % array.length // Calculate the next index with wrap-around
	setState(nextIndex)
	return nextIndex
}

export const onError = (text: string) => {
	toast.error(text)
}

export const onSuccess = (text: string) => {
	toast.success(text)
}

export const onInfo = (text: string) => {
	toast.info(text)
}

export const onWarn = (text: string) => {
	toast.warning(text)
}


