class TestService {
	/**
		 * Funçao que retorna a soma de dois valores
		 * @param {number} first - Primeiro numero
		 * @param {number} second - Segundo numero
		 * @returns {number} - Soma dos numeros
		 */
	soma(first: number, second: number): number {
		return first + second;
	}

	/**
		 *Funçao que retorna a subtracao de dois valores
		* @param {number} first - Primeiro numero
		* @param {number} second - Segundo numero
		* @returns {number} - Terceiro numero
		*/
	subtracao(first: number, second: number): number {
		return first - second;
	}
}

export default TestService;
